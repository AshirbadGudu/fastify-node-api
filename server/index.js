const { products } = require("./db");

const fastify = require("fastify")({
  logger: true,
});

const PORT = 5000;

fastify.get("/", (req, res) => {
  res.send({
    data: products,
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
