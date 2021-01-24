const express = require('express');
const bodyParser = require('body-parser'); //to add a body to a request
const cors = require('cors'); //Cross-origin resource sharing: One server or a client can request infromation on your server..

const sendGrid = require('@sendgrid/mail');

const app = express();


app.use(bodyParser.json());

app.use(cors());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

//Define routes
//Two routes; GET & POST
//two args: path; /api, callback funtion(two params)
app.get('/api', (req, res, next) => {
    res.send('API Status: I\'m awesome!');                          
});

app.post('/api/email', (req, res, next) => {
    sendGrid.setApiKey('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');
    const msg = {
        to: 'ayomideseaz@gmail.com', // Change to your recipient
        from: req.body.email, // Change to your verified sender
        subject: 'Website Contact',
        text: req.body.message,
        //html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }

      sendGrid.send(msg)
      .then(result => {
          res.status(200).json({
              success: true
          });
      })
      .catch(err => {
          console.log('error: ', err);
          res.status(401).json({
              success: false
          });
      });
});


//0.0.0.0 is an address used to refer to all IP addresses on the same machine so 0.0.0.0 refers to 127.0.0.1:3000
app.listen(3000, "0.0.0.0", () => console.log('Application is running'))

