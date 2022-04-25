var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
  passord: { type: String, minlength: 5, maxlength: 15 },
  createdAt: { type: Date, default: '01 - 01 - 2022' },
});
