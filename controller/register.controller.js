// Register route
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const send_email = require('../utils/sendEmail');
const welcome = require('../email_templates/welcome');
const links = require('../utils/links');

const registerController = async(req, res) => {
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

        send_email(username, 'ceo', 'Welcome to ClippyAsst', welcome, {
            username,
            instagram: links.instagram,
            twitter: links.twitter,
            linkedin: links.linkedin
        })
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', geniune: true });
    }
}

module.exports = registerController