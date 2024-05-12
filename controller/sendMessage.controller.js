// Connect to Redis
const redisClient = require('../clients/redis.client')
const Message = require('../models/message.model')

const sendMessageController = (io) => (req, res) => {
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
}

module.exports = sendMessageController