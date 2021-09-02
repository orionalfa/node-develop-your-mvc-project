const mongoose = require("mongoose");
const { Schema } = require("mongoose");

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

const Products = mongoose.model("products", ProductSchema);

module.exports = { Products: Products };
