var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

const credentials = require('../config/config');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: credentials.USER,
    pass: credentials.PASS,
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server ready to accecpt emails.');
  }
})

router.post('/mail', (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `Name: ${name} \nEmail: ${email} \nMessage: ${message}`

  var mail = {
    from: email,
    to: credentials.USER,
    subject: 'Portfolio Site Contact',
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      });
    } else {
      res.json({
        msg: 'success'
      });
    }
  });
});

module.exports = router;
