import { SortOption } from '@/enums/sortOptions'
import { TTransaction } from '@/lib/types/transaction'

export const sortTransactions = (
  transactions: TTransaction[],
  sortBy: SortOption
): TTransaction[] => {
  switch (sortBy) {
    case SortOption.NAME_ASC:
      return [...transactions].sort((a, b) => a.name.localeCompare(b.name))
    case SortOption.NAME_DESC:
      return [...transactions].sort((a, b) => b.name.localeCompare(a.name))
    case SortOption.AMOUNT_ASC:
      return [...transactions].sort((a, b) => a.amount - b.amount)
    case SortOption.AMOUNT_DESC:
      return [...transactions].sort((a, b) => b.amount - a.amount)
    case SortOption.DATE_ASC:
      return [...transactions].sort(
        (a, b) => a.createdAt!.toMillis() - b.createdAt!.toMillis()
      )
    case SortOption.DATE_DESC:
      return [...transactions].sort(
        (a, b) => b.createdAt!.toMillis() - a.createdAt!.toMillis()
      )
    default:
      return transactions
  }
}
