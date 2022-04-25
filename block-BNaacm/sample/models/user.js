var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  email: { type: String, lowwercase: true },
  age: { type: Number, default: 0 },
});
module.exports = mongoose.models('User', userSchema);
