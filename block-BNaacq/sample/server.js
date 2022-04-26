let express = require('express');
let mongoose = require('mongoose');
let User = require('./models/user');
let Comment = require('./models/comment');
let Article = require('./models/articles');

mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'Database is connected');
});

let app = express();

app.get('/', (req, res) => {
  res.send('welcome to home page');
});

app.listen(4000, () => {
  console.log('server is listening on port:4000');
});
