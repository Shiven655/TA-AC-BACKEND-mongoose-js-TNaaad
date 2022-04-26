let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    title: String,
    description: String,
    tags: String,
    createdAt: { type: Date, default: new Date() },
    likes: { type: Number, default: zero },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Article', userSchema);
