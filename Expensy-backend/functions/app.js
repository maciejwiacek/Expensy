import express from "express";
import transactionRoutes from "./src/routes/transactionRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/transactions", transactionRoutes);

export default app;
