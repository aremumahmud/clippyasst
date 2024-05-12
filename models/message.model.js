// Define MongoDB Schema

const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    text: String,
    userId: String,
    date: Date
});


module.exports = mongoose.model('Message', messageSchema);