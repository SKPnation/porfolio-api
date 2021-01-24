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
    sendGrid.setApiKey('');
});


//0.0.0.0 is an address used to refer to all IP addresses on the same machine so 0.0.0.0 refers to 127.0.0.1:3000
app.listen(3030, "0.0.0.0", () => console.log('Application is running'))

