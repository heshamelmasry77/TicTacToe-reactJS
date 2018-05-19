'use strict';

const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 7000;
const fs = require('file-system');

app.use(cors());


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
  if (req.body && req.body.totalMoves !== 9 && !req.body.gameEnded) {
    let random = Math.floor(Math.random() * 9);
    res.json(random);
  } else {
    res.status(500).send('Something broke!')
  }
});


app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));