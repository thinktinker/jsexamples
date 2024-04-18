// before running the app
//npm install express

// to run 
// npm start

'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '127.0.0.1';
const OS = require('os');
const ENV = 'DEV';


// App
const app = express();
app.get('/', (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello FSD Learner! Running Node.js!';
  res.send(msg);
});

app.get('/test', (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello from /test Node!';
  res.send(msg);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);