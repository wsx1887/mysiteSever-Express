let nodemailer = require('nodemailer');


let emailTransporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.qq.com",
    port: 465,
    secure: true,
    auth: {
        user:'547873304@qq.com',
        pass:'lqosoxejsxjjbeaf'
    }
});

module.exports=emailTransporter;