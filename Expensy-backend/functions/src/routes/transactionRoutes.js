import express from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from "../controllers/transactionController.js";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.post("/", requireAuth(), createTransaction);
router.get("/", requireAuth(), getTransactions);
router.put("/:id", requireAuth(), updateTransaction);
router.delete("/:id", requireAuth(), deleteTransaction);

export default router;
