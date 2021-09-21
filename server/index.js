const { products } = require("./db");

const fastify = require("fastify")({
  logger: true,
});

const PORT = process.env.PORT || 5000;

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

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log(error);
    process.exit(1);
  }
};

start();
