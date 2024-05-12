const nodemailer = require('nodemailer')

function send_email1(email) {

    let transporter = nodemailer.createTransport({
        //host: 'smtp-relay.sendinblue.com',
        host: 'smtp-relay.brevo.com',
        port: 587,
        secure: false, // use SSL

        auth: {
            user: "74ad0f001@smtp-brevo.com",
            pass: 'DVgQ4ZFShcvz3HwK'
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
        from: 'Mahmud Aremu <info@clipasst.com>',
        to: email,
        subject: 'Messge Notification From JANE ELLEN CARTER!',


        text: 'hhbujdnjmhnjdmhn jmhnjkmhndjmd'
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

// send_email1('aremumahmud2003@gmail.com')