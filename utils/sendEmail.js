const nodemailer = require('nodemailer')

function send_email(email, from, subject, template, options) {

    let transporter = nodemailer.createTransport({
        //host: 'smtp-relay.sendinblue.com',
        host: 'smtp-relay.brevo.com',
        port: 587,
        secure: false, // use SSL

        auth: {
            user: process.env.SMTP_USER || "74ad0f001@smtp-brevo.com",
            pass: process.env.SMTP_PASSWORD || 'DVgQ4ZFShcvz3HwK'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });
    transporter.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take messages');
        }
    });
    var mailOptions = {
        from: `Clippy Assistant <${from||"noreply"}@clipasst.com>`,
        to: email,
        subject: subject || 'Clippy Assistent Verification Code',
        html: template(options)
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);

        } else {
            console.log('Email sent: ' + info.response);
            // res.redirect('/#success_message')
        }
    });


}


module.exports = send_email
    // send_email1('aremumahmud2003@gmail.com')