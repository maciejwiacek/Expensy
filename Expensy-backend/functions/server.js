import express from "express";
import transactionRoutes from "./src/routes/transactionRoutes.js";

const app = express();
app.use(express.json());

app.use("/transactions", transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
