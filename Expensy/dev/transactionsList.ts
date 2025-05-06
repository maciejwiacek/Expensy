export const generateDevTransactions = () => {
	const transactions = []

	for (let i = 0; i < 10000; i++) {
		transactions.push({
			id: i + 1,
			title: `Transaction ${i + 1}`,
			date: new Date(Date.now() - i * 1000 * 60 * 60 * 24).toISOString(),
			amount: Math.floor(Math.random() * 100000) - 50000,
		})
	}

	return transactions
}
