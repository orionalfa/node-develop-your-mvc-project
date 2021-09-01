const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ModelSchema = new Schema({
  name: String,
  price: Number,
  modelDescription: String,
  unitsStock: Number,
  images: [String],
});
const ProductSchema = new Schema({
  title: String,
  description: String,
  models: [
    {
      type: Schema.Types.ObjectId,
      ref: "models",
    },
  ],
});

const Models = mongoose.model("models", ModelSchema);
const Products = mongoose.model("products", ProductSchema);

module.exports = { Products: Products, Models: Models };
