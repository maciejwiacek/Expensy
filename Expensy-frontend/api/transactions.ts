// This now matches your full form state, with all fields
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
	const res = await fetch(`http://192.168.50.54:3000/transactions`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	})

	if (!res.ok) throw new Error('Failed to create')
	return res.json()
}

export const fetchTransactions = async (
	token: string
): Promise<Transaction[]> => {
	const res = await fetch(`http://192.168.50.54:3000/transactions`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})

	if (!res.ok) throw new Error('Failed to fetch')
	return res.json()
}
