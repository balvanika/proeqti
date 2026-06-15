const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: String,
  count: String,
});

module.exports = mongoose.model("Product", productSchema);