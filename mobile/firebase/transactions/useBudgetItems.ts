import { TBudgetItem } from '@/types/transaction'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  createBudgetItem,
  deleteBudgetItem,
  getBudgetItemById,
  getBudgetItems,
  updateBudgetItem,
} from './transactionsService'

export const useBudgetItems = () => {
  return useQuery({
    queryKey: ['budgetItems'],
    queryFn: getBudgetItems,
    staleTime: 1000 * 60 * 5,
  })
}

export const useBudgetItem = (id: string) => {
  return useQuery({
    queryKey: ['budgetItem', id],
    queryFn: () => getBudgetItemById(id),
    enabled: !!id,
  })
}

export const useCreateBudgetItem = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createBudgetItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['budgetItems'] })
    },
  })
}

export const useUpdateBudgetItem = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<TBudgetItem> }) =>
      updateBudgetItem(id, data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['budgetItems'] }),
  })
}

export const useDeleteBudgetItem = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteBudgetItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['budgetItems'] })
    },
  })
}
