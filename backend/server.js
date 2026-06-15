const cors = require("cors");
require("dotenv").config();

console.log(process.env.PORT);
console.log(process.env.MONGO_URI);

const express = require("express");
const mongoose = require("mongoose");

const Product = require("./models/Product");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/api/products", async (req, res) => {
  const products = await Product.find();

  res.json(products);
});

app.get("/api/products/:id", async (req, res) => {
  const product = await Product.findOne({
    id: Number(req.params.id),
  });

  res.json(product);
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT}`
  );
});