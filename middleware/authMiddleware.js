const jwt = require('jsonwebtoken');

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

module.exports = authMiddleware