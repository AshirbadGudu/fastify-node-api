const { productsSchema, productSchema } = require("../schemas");

const productsRoutes = (fastify, options, done) => {
  fastify.get("/products", productsSchema);

  fastify.get("/product/:id", productSchema);

  done();
};

module.exports = productsRoutes;
