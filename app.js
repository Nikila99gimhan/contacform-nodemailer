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
})

app.listen(3000, () => console.log('sever started......'));