import { Timestamp } from 'firebase/firestore'

type TDateCreated = {
  id: string
  createdAt: Timestamp
  amount: number
  type: 'income' | 'expense' | 'receipt'
}

export type TProduct = {
  name: string
  quantity: number
  price: number
}

export type TReceipt = TDateCreated & {
  type: 'receipt'
  shopName: string
  products: TProduct[]
  date: Timestamp
}

export type TTransaction = TDateCreated & {
  type: 'income' | 'expense'
  name: string
  category: string
  description?: string
}

export type TBudgetItem = TTransaction | TReceipt
