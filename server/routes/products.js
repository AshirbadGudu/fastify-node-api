const { products } = require("../db");
const { productsSchema, productSchema } = require("../schemas");

const productsRoutes = (fastify, options, done) => {
  fastify.get("/products", productsSchema, (req, res) => {
    res.send(products);
  });

  fastify.get("/product/:id", productSchema, (req, res) => {
    const { id } = req.params;
    const product = products.find((item) => item.id == id);
    res.send(product);
  });

  done();
};

module.exports = productsRoutes;
