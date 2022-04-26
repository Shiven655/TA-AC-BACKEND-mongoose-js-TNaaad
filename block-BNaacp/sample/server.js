var express = require('express');
var app = express();
let User = require('./models/user');
//mongoose db
var mongoose = require('mongoose');
mongoose.connect(' mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'connected to Database');
});
//middlewares
app.use(express.json());
//routes
app.post('/user', (req, res, next) => {
  User.create(req.body, (err, product) => {
    if (err) {
      next(err);
    } else {
      res.json(product);
    }
  });
});
app.get('/users', (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) {
      next(err);
    }
    res.json(users);
  });
});

app.get('/users/:id', (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      next(err);
    }
    res.json(user);
  });
});

app.put('/users/:id', (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { next: true },
    (err, updatedData) => {
      if (err) {
        next(err);
      }
      res.json(updatedData);
    }
  );
});

app.delete('/users/:id', (req, res, next) => {
  User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    if (err) {
      next(err);
    }
    res.send('user deleted');
  });
});
//404 error
app.use((req, res, next) => {
  res.send('page not found');
});
//custom error
app.use((err, req, res, next) => {
  res.send(err);
});
app.listen(4000, () => {
  console.log('server is listening on port:4000');
});
