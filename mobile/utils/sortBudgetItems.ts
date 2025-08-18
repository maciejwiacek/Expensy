import { SortOption } from '@/enums/sortOptions'
import { TBudgetItem } from '@/types/transaction'

const getDisplayName = (item: TBudgetItem) => {
  if (item.type === 'receipt') {
    return item.shopName || ''
  }
  return item.name || ''
}

export const sortBudgetItems = (
  items: TBudgetItem[],
  sortBy: SortOption
): TBudgetItem[] => {
  switch (sortBy) {
    case SortOption.NAME_ASC:
      return [...items].sort((a, b) =>
        getDisplayName(a).localeCompare(getDisplayName(b))
      )
    case SortOption.NAME_DESC:
      return [...items].sort((a, b) =>
        getDisplayName(b).localeCompare(getDisplayName(a))
      )
    case SortOption.AMOUNT_ASC:
      return [...items].sort((a, b) => (a.amount ?? 0) - (b.amount ?? 0))
    case SortOption.AMOUNT_DESC:
      return [...items].sort((a, b) => (b.amount ?? 0) - (a.amount ?? 0))
    case SortOption.DATE_ASC:
      return [...items].sort(
        (a, b) =>
          (a.createdAt?.toMillis() ?? 0) - (b.createdAt?.toMillis() ?? 0)
      )
    case SortOption.DATE_DESC:
      return [...items].sort(
        (a, b) =>
          (b.createdAt?.toMillis() ?? 0) - (a.createdAt?.toMillis() ?? 0)
      )
    default:
      return items
  }
}
