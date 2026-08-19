import express from "express";
import postRoutes from "./routes/postRoutes.js"
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());

app.use("/api/posts", postRoutes);

app.use(errorHandler);

app.listen(8000, () => {
  console.log("Server running on port 8000");
})
