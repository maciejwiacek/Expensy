import { db } from '@/firebaseConfig'
import { TBudgetItem, TTransaction } from '@/types/transaction'
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

const getUserBudgetItemCollection = () => {
  const auth = getAuth()
  const currentUser = auth.currentUser
  if (!currentUser) throw new Error('User not authenticated')

  return collection(db, 'users', currentUser.uid, 'budgetItems')
}

// CREATE
export const createBudgetItem = async (data: TBudgetItem) => {
  let sanitizedAmount =
    typeof data.amount === 'string'
      ? Number(String(data.amount).replace(',', '.'))
      : data.amount

  if (data.type === 'expense' || data.type === 'receipt') sanitizedAmount *= -1

  const itemCollectionRef = getUserBudgetItemCollection()

  try {
    await addDoc(itemCollectionRef, {
      ...data,
      amount: sanitizedAmount,
      createdAt: Timestamp.now(),
    })
  } catch {
    throw new Error('Failed to create budget item')
  }
}

// GET ALL
export const getBudgetItems = async (): Promise<TBudgetItem[]> => {
  const itemCollectionRef = getUserBudgetItemCollection()

  try {
    const querySnapshot = await getDocs(itemCollectionRef)
    return querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() }) as TBudgetItem
    )
  } catch {
    throw new Error('Failed to fetch budget items')
  }
}

// GET BY ID
export const getBudgetItemById = async (id: string): Promise<TBudgetItem> => {
  const auth = getAuth()
  const currentUser = auth.currentUser
  if (!currentUser) throw new Error('User not authenticated')

  const itemDocRef = doc(db, 'users', currentUser.uid, 'budgetItems', id)
  try {
    const docSnap = await getDoc(itemDocRef)
    if (!docSnap.exists()) throw new Error('Budget item not found')
    return { id: docSnap.id, ...docSnap.data() } as TBudgetItem
  } catch {
    throw new Error('Failed to fetch budget item')
  }
}

// UPDATE
export const updateBudgetItem = async (
  id: string,
  data: Partial<TBudgetItem>
) => {
  const auth = getAuth()
  const currentUser = auth.currentUser
  if (!currentUser) throw new Error('User not authenticated')

  const itemDocRef = doc(db, 'users', currentUser.uid, 'budgetItems', id)
  try {
    await updateDoc(itemDocRef, data)
  } catch {
    throw new Error('Failed to update budget item')
  }
}

// DELETE
export const deleteBudgetItem = async (id: string) => {
  const auth = getAuth()
  const currentUser = auth.currentUser
  if (!currentUser) throw new Error('User not authenticated')

  const itemDocRef = doc(db, 'users', currentUser.uid, 'budgetItems', id)
  try {
    await deleteDoc(itemDocRef)
  } catch {
    throw new Error('Failed to delete budget item')
  }
}
