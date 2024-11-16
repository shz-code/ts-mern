import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { logger } from "./middlewares/logger";
import { appRouter } from "./routes/appRouter";
import userRoutes from "./routes/userRoutes";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(logger);
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);

// Add tRPC endpoint
app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
  })
);

mongoose
  .connect(process.env.DB_URL!)
  .then(() => console.log("DB Connected Successfully"));

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the TypeScript Express backend!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
