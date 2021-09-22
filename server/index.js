const { productsRoutes } = require("./routes");

const fastify = require("fastify")({
  logger: true,
});

const PORT = process.env.PORT || 5000;

fastify.register(require("fastify-swagger"), {
  exposeRoute: true,
  routePrefix: "/",
  swagger: {
    info: {
      title: "Fastify API",
    },
  },
});
fastify.register(productsRoutes);

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log(error);
    process.exit(1);
  }
};

start();
