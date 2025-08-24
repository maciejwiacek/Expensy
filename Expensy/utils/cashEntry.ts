import {
  CashEntry,
  CashEntryRow,
  NewCashEntry,
  NewCashEntryRow,
} from '@/types/CashEntry'

export const parseISODate = (val: string, field: string): Date => {
  const d = new Date(val)
  if (Number.isNaN(d.getTime())) {
    throw new Error(`Invalid date for field ${field}: ${val}`)
  }
  return d
}

export const toCashEntry = (row: CashEntryRow): CashEntry => {
  if (!row) throw new Error('Invalid CashEntryRow')

  return {
    id: String(row.id),
    name: row.name,
    kind: row.kind,
    amount: row.amount,
    date: parseISODate(row.date, 'date'),
    type: row.type,
    categoryId: row.category_id,
    userId: row.user_id,
    createdAt: parseISODate(row.created_at, 'created_at'),
    updatedAt: parseISODate(row.updated_at, 'updated_at'),
  }
}

export const toNewCashEntry = (row: NewCashEntryRow): NewCashEntry => {
  if (!row) throw new Error('Invalid NewCashEntryRow')

  return {
    name: row.name,
    kind: row.kind,
    amount: row.amount,
    date: parseISODate(row.date, 'date'),
    type: row.type,
    categoryId: row.category_id,
    userId: row.user_id,
  }
}

export const toCashEntryRow = (entry: CashEntry): CashEntryRow => {
  if (!entry) throw new Error('toCashEntryRow: entry is required')

  const numericId = Number(entry.id)
  if (!Number.isFinite(numericId)) {
    throw new Error('toCashEntryRow: entry.id is not a valid number')
  }

  return {
    id: numericId,
    name: entry.name,
    kind: entry.kind,
    amount: entry.amount,
    date: entry.date.toISOString(),
    type: entry.type,
    category_id: entry.categoryId,
    user_id: entry.userId,
    created_at: entry.createdAt.toISOString(),
    updated_at: entry.updatedAt.toISOString(),
  }
}

export const toNewCashEntryRow = (entry: NewCashEntry): NewCashEntryRow => {
  if (!entry) throw new Error('Invalid NewCashEntry')

  return {
    name: entry.name,
    kind: entry.kind,
    amount: entry.amount,
    date: entry.date.toISOString(),
    type: entry.type,
    category_id: entry.categoryId,
    user_id: entry.userId,
  }
}
