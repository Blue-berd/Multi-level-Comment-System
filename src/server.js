import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { mongooseConnection } from "./config/mongodb.js";
const port = process.env.PORT || 3000;

app.listen(port, () => {
  mongooseConnection();
  console.log(
    `Multi level comment system backend app listening at http://localhost:${port}`
  );
});
