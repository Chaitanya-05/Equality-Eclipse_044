const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.email_host,
    port : process.env.email_port,
    auth: {
        user:process.env.email_user,
        pass:process.env.email_pass
    }
});

const sendEmail = async(to,subject,text)=>{
    try{
        await transporter.sendMail({
            from:process.env.email_from,
            to,
            subject,
            text
        });
        console.log('email send successfully');
    }
    catch(err){
        console.err('error sending email :',err);
    }
};

module.exports = {sendEmail};