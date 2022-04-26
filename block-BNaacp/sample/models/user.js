var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, lowwercase: true },
    sports: String,
  },
  { timestamps: true }
);

let User = mongoose.model('User', userSchema);

module.exports = User;
