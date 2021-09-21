const productSchema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          id: { type: "integer" },
          title: { type: "string" },
          category: { type: "string" },
        },
      },
    },
  },
};

module.exports = productSchema;
