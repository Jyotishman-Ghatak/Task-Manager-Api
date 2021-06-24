const nodemailer = require("nodemailer")
const WelcomeEmail = (email, name) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_PASS
        },
    });
    var data = {
        from: process.env.SENDER_EMAIL,
        to: email,
        subject: "Login Message",
        text: `Hello ${name}, Welcome to the task manager app!.
        Hope You will enjoy using our application`
    }
    transporter.sendMail(data, (error, info) => {
        if (error) {
            console.log(error)
        }
        console.log(info)
    })
}

const deactivateEmail = (email, name) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_PASS
        },
    });
    var data = {
        from: process.env.SENDER_EMAIL,
        to: email,
        subject: "Login Message",
        text: `Hello ${name}, Thanks for using task manager app!.
        Hope You enjoyed using our application`
    }
    transporter.sendMail(data, (error, info) => {
        if (error) {
            console.log(error)
        }
        console.log(info)
    })
}

module.exports = {
    WelcomeEmail,
    deactivateEmail
}

