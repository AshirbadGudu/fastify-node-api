const { products } = require("../db");

const productsRoutes = (fastify, options, done) => {
  fastify.get("/products", (req, res) => {
    res.send({
      data: products,
    });
  });

  fastify.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find((item) => item.id == id);
    res.send({
      data: product,
    });
  });

  done();
};

module.exports = productsRoutes;
