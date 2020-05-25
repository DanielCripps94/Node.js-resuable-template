
const nodemailer = require("nodemailer");

async function main() {
 
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object 

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 500,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass, 
    },
  });

  
  let mailOptions = await transporter.sendMail({
    from: '"NASTEHH" <NASTEHH@example.com>', // The senders address
    to: "DAN@example.com, DAN@example.com", // People recieving the email
    subject: "lOVE NODE BLOGS", // Subject
    text: "DO YOU LOVE NODEMAILER?", // plain text body
    html: "<b>DO YOU LOVE NODEMAILER?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
 
}

main().catch(console.error);
