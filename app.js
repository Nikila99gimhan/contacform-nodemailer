const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

//view Engine Setup

app.engine('handlebars',exphbs());
app.set('view engine' , 'handlebars');

//static folder 
app.use('/public' , express.static(path.join(__dirname,'public')));

//body parser Midleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.render('contact', {layout: false});

});

app.post('/send', (req,res) => {
    const output = `
    <p>You Have a new  contact message</p>
    <h3>cONTACT dETAILS</h3>
    <ul>
        <li>First Name: ${req.body.fname}</li>
        <li>Last Name: ${req.body.lname}</li>
        <li>Email: ${req.body.email}</li>
       
    
    </ul>
    <h3>Message</h3>
     <p>${req.body.comment}</p>
     `;
     


  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "mail@example.com", // generated ethereal user
      pass: "234", // generated ethereal password
    },
    tls:{
        rejectUnauthorized:false
    }
  });

  // send mail with defined transport object
  let mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}



);

app.listen(3000, () => console.log('sever started......'));