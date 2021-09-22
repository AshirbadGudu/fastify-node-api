const { getProducts, getProduct } = require("../controllers");
const { productsSchema, productSchema } = require("../schemas");

const productsRoutes = (fastify, options, done) => {
  fastify.get("/products", productsSchema, getProducts);

  fastify.get("/product/:id", productSchema, getProduct);

  done();
};

module.exports = productsRoutes;
