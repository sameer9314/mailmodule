var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sameersaurabh9314@gmail.com',
    pass: '************'
  }
});
var app = require("node-server-screenshot");
app.fromURL("https://dcpcapgemini.cf/", "test.png", function(){
    //an image of google.com has been saved at ./test.png
    console.log('image saved');
});
var mailOptions = {
  from: 'sameersaurabh9314@gmail.com',
  to: 'sameer.saurabh@capgemini.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html: '<h1>Welcome</h1><p>That was easy!</p>',
  attachments:[{
    fiename:"test.jpg",
     path:'/test.png'
  }
  ]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});