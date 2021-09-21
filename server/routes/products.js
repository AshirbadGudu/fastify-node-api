const { products } = require("../db");
const { productsSchema } = require("../schemas");

const productsRoutes = (fastify, options, done) => {
  fastify.get("/products", productsSchema, (req, res) => {
    res.send(products);
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
