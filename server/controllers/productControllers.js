const { products } = require("../db");

const getProducts = (req, res) => {
  res.send(products);
};

const getProduct = (req, res) => {
  const { id } = req.params;
  const product = products.find((item) => item.id == id);
  res.send(product);
};

module.exports = {
  getProduct,
  getProducts,
};
