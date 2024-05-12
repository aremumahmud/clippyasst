const userModel = require("../models/user.model")
const generateOTP = require("../utils/generateOTP")
const bcrypt = require('bcryptjs');

const otpSendController = async(req, res) => {
    const { email: username } = req.body
        //confirm if user exists
    console.log(username)
    try {
        let user = await userModel.findOne({ username })
        if (!user) {
            return res.json({
                error: true,
                message: 'User with email address not found'
            })
        }

        let otp = await generateOTP()
        console.log(otp)

        user.otp = otp
        await user.save()

        res.json({
            error: false
        })
    } catch (err) {
        res.json({
            error: true,
            message: 'Internal server error'
        })
    }
}

const otpVerifyController = async(req, res) => {
    let { email: username, otp } = req.body

    try {
        let user = await userModel.findOne({ username })
        if (!user) {
            return res.json({
                error: true,
                message: 'OTP verification Failed'
            })
        }
        console.log(user.otp, Number(otp))
        if (user.otp === Number(otp)) {
            return res.json({
                error: false
            })
        }

        res.json({
            error: true,
            message: 'Wrong OTP code'
        })
    } catch (err) {
        res.json({
            error: true,
            message: 'Internal server error'
        })
    }
}


const otpChangePassword = async(req, res) => {
    let { email: username, otp, password } = req.body

    try {
        let user = await userModel.findOne({ username })
        if (!user) {
            return res.json({
                error: true,
                message: 'Request compromised'
            })
        }
        // console.log(user.otp, Number(otp))
        if (user.otp === Number(otp)) {

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            user.password = hashedPassword

            await user.save()

            return res.json({
                error: false
            })
        }

        res.json({
            error: true,
            message: 'Request compromised'
        })
    } catch (err) {
        res.json({
            error: true,
            message: 'Internal server error'
        })
    }
}

module.exports = {
    otpSendController,
    otpVerifyController,
    otpChangePassword
}