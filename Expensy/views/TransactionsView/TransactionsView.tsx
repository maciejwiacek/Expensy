import { View, SafeAreaView, FlatList } from 'react-native'
import React, { useMemo, useState } from 'react'
import StyledText from '@/components/StyledText/StyledText'
import styles from './styles'
import SearchBar from '@/components/SearchBar/SearchBar'
import TransactionItem from '@/components/TransactionItem/TransactionItem'
import { generateDevTransactions } from '@/dev/transactionsList'

const transactions = generateDevTransactions().sort(
	(a, b) => b.createdAt - a.createdAt
)

const TransactionsView = () => {
	const [search, setSearch] = useState('')

	const headerComponent = useMemo(() => {
		return (
			<View style={{ backgroundColor: 'white' }}>
				<StyledText variant='h3'>Transakcje</StyledText>
				<View style={styles.searchBarContainer}>
					<SearchBar value={search} onChangeText={setSearch} />
				</View>
			</View>
		)
	}, [search])

	const filteredTransactions = useMemo(() => {
		return transactions.filter((t) =>
			t.title.toLowerCase().includes(search.toLowerCase())
		)
	}, [search])

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				scrollsToTop={true}
				data={filteredTransactions}
				renderItem={({ item }) => (
					<TransactionItem
						key={item.id}
						title={item.title}
						amount={item.amount}
						date={item.date}
					/>
				)}
				style={{ paddingHorizontal: 24 }}
				stickyHeaderHiddenOnScroll={true}
				stickyHeaderIndices={[0]}
				ListHeaderComponent={headerComponent}
			/>
		</SafeAreaView>
	)
}

export default TransactionsView
