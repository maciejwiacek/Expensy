import {
  addTransactionToDB,
  getTransactionsCollection,
} from "../services/transactionService.js";

export const createTransaction = async (req, res) => {
  try {
    const { userId, amount, type } = req.body;
    if (!userId || !amount || !type) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const id = await addTransactionToDB({ userId, amount, type });
    res.status(201).json({ id });
  } catch (error) {
    console.log("Error creating transaction:", error);
    res.status(500).json({ error: "Failed to create a transaction" });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const transactionsRef = getTransactionsCollection();
    const response = await transactionsRef.get();
    let responseArray = [];
    response.forEach((doc) => {
      responseArray.push({ id: doc.id, ...doc.data() });
    });
    res.status(201).send(responseArray);
  } catch (error) {
    console.log("Error fetching transactions:", error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const newType = "Test type!";
    const transactionsRef = getTransactionsCollection().doc(id).update({
      type: newType,
    });
    res.send(transactionsRef);
  } catch (error) {
    console.log("Error updating transaction:", error);
    res.status(500).json({ error: "Failed to update transaction" });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getTransactionsCollection().doc(id).delete();
    res.send(response);
  } catch (error) {
    console.log("Error deleting transaction:", error);
    res.status(500).json({ error: "Failed to delete transaction" });
  }
};
