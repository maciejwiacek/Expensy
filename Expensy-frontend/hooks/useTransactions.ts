import { categories } from '@/constants/transactionOptions'
import { useAuth } from '@clerk/clerk-expo'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import {
	createTransaction,
	CreateTransactionInput,
	fetchTransactions,
	Transaction,
} from '../api/transactions'

export const useTransactions = () => {
	const { getToken } = useAuth()
	const queryClient = useQueryClient()

	// READ
	const transactionsQuery = useQuery<Transaction[], Error>({
		queryKey: ['transactions'],
		queryFn: async () => {
			const token = await getToken()
			if (!token) throw new Error('No token')
			return fetchTransactions(token)
		},
	})

	// CREATE
	const createMutation = useMutation<
		Transaction,
		Error,
		CreateTransactionInput
	>({
		mutationFn: async (data) => {
			const token = await getToken()
			if (!token) throw new Error('No token')
			return createTransaction({ token, data })
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['transactions'] })
		},
	})

	return {
		transactionsQuery,
		createTransaction: createMutation.mutateAsync,
	}
}

type TransactionFormState = {
	type: 'income' | 'expense'
	title: string
	amount: string
	date: string
	category: string
	description: string
}

export const useTransactionForm = () => {
	const [form, setForm] = useState<TransactionFormState>({
		type: 'expense',
		title: '',
		amount: '',
		date: '',
		category: categories[0].value || '',
		description: '',
	})

	const updateField = <K extends keyof TransactionFormState>(
		key: K,
		value: TransactionFormState[K]
	) => {
		setForm((prev) => ({
			...prev,
			[key]: value,
		}))
	}

	return { form, updateField, setForm }
}
