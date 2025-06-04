import admin from "../config/firebase.js";

const db = admin.firestore();

export const addTransactionToDB = async ({
  userId,
  type,
  title,
  amount,
  date,
  category,
  description,
}) => {
  const docRef = await db.collection("transactions").add({
    userId,
    type,
    title,
    amount,
    date,
    category,
    description,
  });

  return docRef.id;
};

export const getTransactionsCollection = () => {
  return db.collection("transactions");
};
