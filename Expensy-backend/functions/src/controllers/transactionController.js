import { getAuth } from "@clerk/express";
import {
  addTransactionToDB,
  getTransactionsCollection,
} from "../services/transactionService.js";

export const createTransaction = async (req, res) => {
  try {
    const { type, title, amount, date, category, description } = req.body;
    const { userId } = getAuth(req);

    if (!type || !title || !amount || !date || !category) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const id = await addTransactionToDB({
      userId,
      type,
      title,
      amount,
      date,
      category,
      description,
    });
    res.status(201).json({ id });
  } catch (error) {
    console.log("Error creating transaction:", error);
    res.status(500).json({ error: "Failed to create a transaction" });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const { userId } = getAuth(req);
    const transactionsRef = getTransactionsCollection();
    const snapshot = await transactionsRef.where("userId", "==", userId).get();

    const transactions = [];
    snapshot.forEach((doc) => {
      transactions.push({ id: doc.id, ...doc.data() });
    });
    res.status(201).send(transactions);
  } catch (error) {
    console.log("Error fetching transactions:", error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, amount } = req.body;
    const { userId } = getAuth(req);

    const docRef = getTransactionsCollection().doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    if (doc.data().userId !== userId) {
      return res
        .status(403)
        .json({ error: "Unauthorized to update this transaction" });
    }

    const updatedData = {};
    if (type) updatedData.type = type;
    if (amount) updatedData.amount = amount;

    await docRef.update(updatedData);
    res.status(200).json({ message: "Transaction updated successfully" });
  } catch (error) {
    console.log("Error updating transaction:", error);
    res.status(500).json({ error: "Failed to update transaction" });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = getAuth(req);

    const docRef = getTransactionsCollection().doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    if (doc.data().userId !== userId) {
      return res
        .status(403)
        .json({ error: "Unauthorized to delete this transaction" });
    }

    await docRef.delete();
    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    console.log("Error deleting transaction:", error);
    res.status(500).json({ error: "Failed to delete transaction" });
  }
};
