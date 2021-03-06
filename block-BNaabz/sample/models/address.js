let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let addressSchema = new Schema(
  {
    village: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    pin: Number,
    user: Schema.Types.ObjectId,
    favourites: { type: [String] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Address', addressSchema);
