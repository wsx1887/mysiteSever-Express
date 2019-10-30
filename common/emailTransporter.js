let nodemailer = require('nodemailer');


let emailTransporter = nodemailer.createTransport({
    //使用连接池，而不是每封邮件都创建连接。
    pool: true,
    host: "smtp.qq.com",
    port: 465,
    //使用TLS连接服务器。465端口，一般都要用TLS，而对于端口587或25，请将其保留为false。
    secure: true,
    auth: {
        user:'547873304@qq.com',
        //这里是服务器的授权码，而不是账号密码。
        pass:'xx'
    }
});

module.exports=emailTransporter;