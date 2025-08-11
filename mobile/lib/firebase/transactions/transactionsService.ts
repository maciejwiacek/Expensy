import { db } from '@/firebaseConfig'
import { TTransaction } from '@/lib/types/transaction'
import { getAuth } from 'firebase/auth'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  Timestamp,
  updateDoc,
} from 'firebase/firestore'

const getUserTransactionCollection = () => {
  const auth = getAuth()
  const currentUser = auth.currentUser
  if (!currentUser) throw new Error('User not authenticated')

  return collection(db, 'users', currentUser.uid, 'transactions')
}

export const createTransaction = async (data: TTransaction) => {
  const txCollectionRef = getUserTransactionCollection()

  try {
    await addDoc(txCollectionRef, { ...data, createdAt: Timestamp.now() })
  } catch {
    throw new Error('Failed to create transaction')
  }
}

export const getTransactions = async (): Promise<TTransaction[]> => {
  const txCollectionRef = getUserTransactionCollection()

  try {
    const querySnapshot = await getDocs(txCollectionRef)
    return querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() }) as TTransaction
    )
  } catch {
    throw new Error('Failed to fetch transactions')
  }
}

export const getTransactionById = async (id: string): Promise<TTransaction> => {
  const auth = getAuth()
  const currentUser = auth.currentUser
  if (!currentUser) throw new Error('User not authenticated')

  const txDocRef = doc(db, 'users', currentUser.uid, 'transactions', id)
  try {
    const docSnap = await getDoc(txDocRef)
    if (!docSnap.exists()) throw new Error('Transaction not found')
    return { id: docSnap.id, ...docSnap.data() } as TTransaction
  } catch {
    throw new Error('Failed to fetch transaction')
  }
}

export const updateTransaction = async (
  id: string,
  data: Partial<TTransaction>
) => {
  const auth = getAuth()
  const currentUser = auth.currentUser
  if (!currentUser) throw new Error('User not authenticated')

  const txDocRef = doc(db, 'users', currentUser.uid, 'transactions', id)
  try {
    await updateDoc(txDocRef, data)
  } catch {
    throw new Error('Failed to update transaction')
  }
}

export const deleteTransaction = async (id: string) => {
  const auth = getAuth()
  const currentUser = auth.currentUser
  if (!currentUser) throw new Error('User not authenticated')

  const txDocRef = doc(db, 'users', currentUser.uid, 'transactions', id)
  try {
    await deleteDoc(txDocRef)
  } catch {
    throw new Error('Failed to delete transaction')
  }
}
