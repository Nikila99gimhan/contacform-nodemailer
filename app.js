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

app.listen(3000, () => console.log('sever started......'));