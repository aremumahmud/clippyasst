const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const redis = require('ioredis');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors')


const app = express();
app.use(cors())


const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});



app.use(express.json())
app.use(express.urlencoded()) // Connect to MongoDB
mongoose.connect(process.env.mongoURI || 'mongodb://localhost:27017/clipboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



const authMiddleware = (req, res, next) => {

    var authHeader = req.headers['authorization'];

    var token = authHeader && authHeader.split(' ')[1]

    jwt.verify(token, process.env.JWT_SECRET || 'your_secret_key', (err, user) => {
        if (err) {
            console.log("invalid token");
            return res.status(403).json({
                error: 'invalid token',
                success: false
            })

        }

        req.user = user;
        next();
    });
}



// Define MongoDB Schema
const messageSchema = new mongoose.Schema({
    text: String,
    userId: String,
    date: Date
});


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    dateJoined: Date
});


// User model
const User = mongoose.model('User', userSchema);
const Message = mongoose.model('Message', messageSchema);

// Connect to Redis
const redisClient = redis.createClient(process.env.REDISCLIENT || null);

// Socket.IO connection handling
io.on('connection', (socket) => {
    // Register user with their socket ID in Redis

    socket.on('register', (token) => {

        jwt.verify(token, process.env.JWT_SECRET || 'your_secret_key', (err, user) => {
            if (err) {
                return socket.emit('registrationError', true)
            }

            let { userId } = user
            redisClient.sadd(userId, socket.id);

            // Remove user from Redis when socket disconnects
            socket.on('disconnect', () => {
                redisClient.smembers(userId, (err, sockets) => {
                    if (sockets.length === 1 && sockets[0] === socket.id) {
                        redisClient.del(userId);
                    } else {
                        redisClient.srem(userId, socket.id);
                    }
                });
            });
        });

    });


});

// Express endpoint for storing text
app.post('/message', authMiddleware, (req, res) => {
    const { text } = req.body;
    const { userId } = req.user
    const message = new Message({ text, userId, date: new Date() });
    message.save().then(() => {
        redisClient.smembers(userId, (err, sockets) => {
            sockets.forEach(socketId => {
                io.to(socketId).emit('message', message);
            });
        });
        res.status(200).send('Message stored and broadcasted successfully.');
    }).catch((error) => {
        console.log(error)
        res.status(500).send('Error storing message.');
    });
});

// Express endpoint for deleting text
app.delete('/message/:id', (req, res) => {
    const messageId = req.params.id;
    Message.findByIdAndDelete(messageId).then((deletedMessage) => {
        if (!deletedMessage) {
            return res.status(404).send('Message not found.');
        }
        redisClient.smembers(deletedMessage.userId, (err, sockets) => {
            sockets.forEach(socketId => {
                io.to(socketId).emit('messageDeleted', messageId);
            });
        });

    }).catch((error) => {
        res.status(500).send('Error deleting message.');
    });
});


// Register route
app.post('/register', async(req, res) => {
    try {
        const { username, password } = req.body;

        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user to the database
        const newUser = new User({ username, password: hashedPassword, dateJoined: new Date() });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', geniune: true });
    }
});

// Login route
app.post('/login', async(req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const user = await User.findOne({ username });


        // If user not found or password is incorrect
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const messages = await Message.find({ userId: user._id })
        const token = jwt.sign({ userId: user._id, username }, process.env.JWT_SECRET || 'your_secret_key');
        // console.log(messages)
        res.json({ message: 'Login successful', token, username, messages: messages || [], dateJoined: user.dateJoined || new Date() });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.post('/getUserData', authMiddleware, async(req, res) => {

    let { userId, username } = req.user

    try {
        const messages = await Message.find({ userId })
        const user = await User.findById(userId)

        if (!user) {
            return res.status(500).json({ error: 'Request Compromised' });
        }

        res.json({ messages, username, dateJoined: user.dateJoined || new Date() })
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }


})


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});