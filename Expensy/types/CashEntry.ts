export type CashEntryRow = {
  id: number
  name: string
  kind: string
  amount: number
  date: string
  type: 'income' | 'expense'
  category_id: number
  user_id: string
  created_at: string
  updated_at: string
}

export type CashEntry = {
  id: string
  name: string
  kind: string
  amount: number
  date: Date
  type: 'income' | 'expense'
  categoryId: number
  userId: string
  createdAt: Date
  updatedAt: Date
}

export type NewCashEntry = Omit<
  CashEntry,
  'id' | 'createdAt' | 'updatedAt' | 'kind'
>

export type NewCashEntryRow = Omit<
  CashEntryRow,
  'id' | 'created_at' | 'updated_at' | 'kind'
>
