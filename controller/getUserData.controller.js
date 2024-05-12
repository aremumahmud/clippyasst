const User = require('../models/user.model')
const Message = require('../models/message.model')

const getUserDataController = async(req, res) => {

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


}

module.exports = getUserDataController