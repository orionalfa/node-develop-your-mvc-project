const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ModelSchema = new Schema({
  name: String,
  price: Number,
  modelDescription: String,
  unitsStock: Number,
  images: [String],
});

const Models = mongoose.model("models", ModelSchema);

module.exports = { Models: Models };
