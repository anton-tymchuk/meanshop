var nodemailer = require('nodemailer'),
    mailConfig = require('../config/config'),
    transporter = nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: mailConfig.mailer.username,
                pass: mailConfig.mailer.password
            }
        }
    );

function sendMail (req){
    transporter.sendMail({
        from: mailConfig.mailer.username,
        to: req.body.email,
        subject: 'Hew order # ' + req.count,
        html: 'Hi. We recived your order successfuly! Thaks ;)'
    });
    console.log('Mail has been sent!');
}

module.exports = sendMail;
