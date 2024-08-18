import swaggerJsdoc from "swagger-jsdoc";

// Basic configuration for Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description: "API documentation for Express application",
    },
    servers: [
      {
        url: `http://${process.env.ROOT_URL}:3000/api/`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/Features/*/api-docs.js"],
};

export const swaggerDocs = swaggerJsdoc(swaggerOptions);
