const productsSchema = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "integer" },
            title: { type: "string" },
            category: { type: "string" },
          },
        },
      },
    },
  },
};

module.exports = productsSchema;
