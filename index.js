const mongoose = require('mongoose');
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken');

// Connect to Redis
const redisClient = require('./clients/redis.client');
const socketIo = require('socket.io');
const app = require('./app');
const http = require('http');
const sendMessageController = require('./controller/sendMessage.controller');
const authMiddleware = require('./middleware/authMiddleware');
const deleteMessageController = require('./controller/deleteMessage.controller');

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: ["https://clippyui.vercel.app", 'http://localhost:5173'],
        methods: ["GET", "POST"]
    }
});


dotenv.config()


// Connect to MongoDB
mongoose.connect(process.env.mongoURI || 'mongodb://localhost:27017/clipboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});





// Socket.IO connection handling
io.on('connection', (socket) => {
    // Register user with their socket ID in Redis

    socket.on('register', (token) => {

        jwt.verify(token, process.env.JWT_SECRET || 'your_secret_key', async(err, user) => {
            if (err) {
                return socket.emit('registrationError', true)
            }

            let { userId } = user
            let f = await redisClient.sadd(userId, socket.id);

            // console.log(f, await redisClient.smembers(userId))
            // Remove user from Redis when socket disconnects
            socket.on('disconnect', () => {
                redisClient.smembers(userId, async(err, sockets) => {
                    if (sockets.length === 1 && sockets[0] === socket.id) {
                        await redisClient.del(userId);
                    } else {
                        // console.log(socket.id)
                        await redisClient.srem(userId, socket.id);
                    }
                });
            });
        });

    });


});





app.post('/message', authMiddleware, sendMessageController(io))

app.post('/delete/:id', authMiddleware, deleteMessageController(io))


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});