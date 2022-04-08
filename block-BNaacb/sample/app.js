var express = require('express');
var mongoose = require('mongoose');

var app = express();
mongoose.connect('mongoose:localhost/sample', (err) => {
  console.log(err ? err : 'connected to database');
});

app.get('/'),
  (req, res) => {
    res.send('welcome');
  },
  app.listen(3000, () => {
    console.log('Server is listning on 3K');
  });
