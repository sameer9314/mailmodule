var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sameersaurabh9314@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'sameersaurabh9314@gmail.com',
  to: 'sameersaurabh9314@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});