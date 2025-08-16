import { Timestamp } from 'firebase/firestore'

export type TProduct = {
  name: string
  quantity: number
  price: number
}

export type TReceipt = {
  shopName: string
  date: Timestamp
  products: TProduct[]
  totalSum: number
}

export type TTransaction = {
  id: string
  type: 'income' | 'expense' | 'receipt'
  name: string
  amount: number
  category: string
  description?: string
  createdAt?: Timestamp
  receipt?: TReceipt
}
