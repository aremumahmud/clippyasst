// Login route
const bcrypt = require('bcryptjs');
const User = require('../models/user.model')
const Message = require('../models/message.model')
const jwt = require('jsonwebtoken');

const loginController = async(req, res) => {
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
}

module.exports = loginController