import axios from 'axios'
export interface Transaction {
	id: string
	type: 'income' | 'expense'
	title: string
	amount: number
	date: string
	category: string
	description?: string
}

export interface CreateTransactionInput {
	type: 'income' | 'expense'
	title: string
	amount: number
	date: string
	category: string
	description?: string
}

export const createTransaction = async ({
	token,
	data,
}: {
	token: string
	data: CreateTransactionInput
}): Promise<Transaction> => {
	try {
		const res = await axios.post<Transaction>(
			'http://192.168.0.108:3000/transactions',
			data,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			}
		)
		return res.data
	} catch (error) {
		throw new Error('Failed to create transaction')
	}
}

export const fetchTransactions = async (
	token: string
): Promise<Transaction[]> => {
	try {
		const res = await axios.get<Transaction[]>(
			'http://192.168.0.108:3000/transactions',
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)

		return res.data
	} catch (e) {
		throw new Error('Failed to fetch transactions')
	}
}
