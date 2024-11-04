const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

const {SENDGRID_API_KEY} = process.env;
// 3-> 1. otp 2. tickets 3. promotion
async function emailHelper(templateName, receiverEmail, creds){
    try{
        const templatePath = path.join(__dirname, "email_templates", templateName);
        let content = await fs.promises.readFile(templatePath, "utf-8");
        let replacedContent = replaceContent(content, creds);
        const emailDetails = {
            to : receiverEmail,
            from : "shobhitgoel1990@gmail.com",
            subject: "Mail from ScalerShows",
            text: `Hi ${creds.name} this is your reset otp ${creds.otp}`,
            html: replacedContent
        };
        const transportDetails = {
            host: "smtp.sendgrid.net",
            port: 587,
            auth: {
                user: "apikey",
                pass: SENDGRID_API_KEY
            }
        }

        const transporter = nodemailer.createTransport(transportDetails);
        await transporter.sendMail(emailDetails);
        console.log("email sent");
    }catch(err){
        console.log(err);
    }
}

function replaceContent(content, creds){
    let allKeysArr = Object.keys(creds); //[name, otp]
    allKeysArr.forEach(key => {
        content = content.replace(`#{${key}}`, creds[key]);
    })
    return content
}
// emailHelper("otp.html","goelabhishek694@gmail.com", {"name":"Abhishek", "otp":"1234"}).then(d => console.log(d)).catch(err => console.log(err));

module.exports = {emailHelper};

