// Connect to Redis
const redisClient = require('../clients/redis.client')
const Message = require('../models/message.model')


const deleteMessageController = (io) => (req, res) => {
    const messageId = req.params.id;
    Message.findByIdAndDelete(messageId).then((deletedMessage) => {
        if (!deletedMessage) {
            return res.status(404).json({ sucess: false });;
        }
        redisClient.smembers(deletedMessage.userId, (err, sockets) => {
            sockets.forEach(socketId => {
                io.to(socketId).emit('messageDeleted', messageId);
            });
        });
        return res.status(200).json({ sucess: true });
    }).catch((error) => {
        res.status(500).json({ sucess: false });
    });
}

module.exports = deleteMessageController