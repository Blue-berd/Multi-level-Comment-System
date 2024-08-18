import cors from "cors";
import express from "express";
import path from "path";
import swaggerUi from "swagger-ui-express";
import { swaggerDocs } from "./config/swagger.js";
import commentRoutes from "./features/comments/commentRoutes.js";
import postRoutes from "./features/posts/postsRoutes.js";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.static(path.join(__dirname, "dist")));
app.use("/api/users", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/posts", commentRoutes);

app.use((err, req, res, next) => {
  if (err) {
    console.error(err.stack);
    return sendError(
      res,
      err.message || "Internal Server Error",
      err.status || 500
    );
  }
});

app.all("/*", (req, res, next) => {
  return sendError(res, "Route not found", 404);
});

export default app;
