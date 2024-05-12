const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    dateJoined: Date,
    otp: Number
});


module.exports = mongoose.model('User', userSchema);