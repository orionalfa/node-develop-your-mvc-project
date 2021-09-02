const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const UserSchema = new Schema({
  name: String,
  email: String,
  pass: String,
  shippingAddress: String,
  role: String,
  cart: [{ product: Schema.Types.ObjectId, model: Schema.Types.ObjectId }],
});

const Users = mongoose.model("users", UserSchema);

module.exports = { Users: Users };
