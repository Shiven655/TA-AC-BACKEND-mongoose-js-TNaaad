var mongoose = require('mongoose');
var schema = mongoose.Schema;
var articleSchema = new schema({
  name: String,
  age: Number,
});
