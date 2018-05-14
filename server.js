'use strict';

const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 7000;
const fs = require('file-system');
const config = require('./config/config');

app.use(cors());


// const Project = require('./api/models/projectListModel'); //created model loading here

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

let db_string;
// if (process.env.hasOwnProperty('MONGODB_URI')) {
//   db_string = process.env.MONGODB_URI;
// } else {
//   db_string = 'mongodb://localhost:27017/someDatabaseName';
//   mongoose.set('debug', true);
// }

// mongoose.connect(db_string,
//     function(err) {
//       if (!err) {
//         console.log('we are connected to mongodb server');
//       } else {
//         console.log('can\'t connect to mongodb server' + err);
//       }
//     });

app.use(bodyParser.json()); // <--- Here
app.use(bodyParser.urlencoded({extended: true})); // handle URL-encoded data

// // Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './react-ui/build')));

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

app.post('/api/game', function (req, res, next) {
  console.log(req.body);
  if (req.body && req.body.totalMoves !== 9 && !req.body.gameEnded) {
    let random = Math.floor(Math.random() * 9);

    console.log('random number', random);
    res.json(random);
  } else {
    res.status(500).send('Something broke!')
  }
});


app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));