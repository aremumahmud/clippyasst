const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const sendMessageController = require('../controller/sendMessage.controller')
const deleteMessageController = require('../controller/deleteMessage.controller')
const registerController = require('../controller/register.controller')
const loginController = require('../controller/login.controller')
const getUserDataController = require('../controller/getUserData.controller')
const otpController = require('../controller/otp.controller')
const router = express.Router()


router
    .route('/register')
    .post(registerController)


router
    .route('/login')
    .post(loginController)


router
    .route("/getUserData")
    .post(authMiddleware, getUserDataController)

router
    .route('/otp-send')
    .post(otpController.otpSendController)

router
    .route('/otp-verify')
    .post(otpController.otpVerifyController)

router
    .route('/otp-change-password')
    .post(otpController.otpChangePassword)

module.exports = router