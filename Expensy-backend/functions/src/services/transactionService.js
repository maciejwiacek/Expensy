import admin from "../config/firebase.js";

const db = admin.firestore();

export const addTransactionToDB = async ({ userId, amount, type }) => {
  const docRef = await db.collection("transactions").add({
    userId,
    amount,
    type,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return docRef.id;
};

export const getTransactionsCollection = () => {
  return db.collection("transactions");
};
