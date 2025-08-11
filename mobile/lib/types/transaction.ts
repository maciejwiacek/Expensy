import { Timestamp } from 'firebase/firestore'

export type TTransaction = {
  id: string
  type: 'income' | 'expense'
  name: string
  amount: number
  category: string
  description?: string
  createdAt?: Timestamp
}
