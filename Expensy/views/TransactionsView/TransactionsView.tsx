import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import StyledText from '@/components/StyledText/StyledText'
import styles from './styles'
import SearchBar from '@/components/SearchBar/SearchBar'
import TransactionItem from '@/components/TransactionItem/TransactionItem'

const transactions = [
	{
		id: 1,
		title: 'Lidl',
		date: Date.now(),
		amount: -238.98,
	},
	{
		id: 2,
		title: 'Carrefour',
		date: Date.now(),
		amount: -12.3,
	},
	{
		id: 3,
		title: 'Income',
		date: Date.now(),
		amount: 1234.3,
	},
	{
		id: 4,
		title: 'Lidl',
		date: Date.now(),
		amount: -238.98,
	},
	{
		id: 5,
		title: 'Carrefour',
		date: Date.now(),
		amount: -12.3,
	},
	{
		id: 6,
		title: 'Income',
		date: Date.now(),
		amount: 1234.3,
	},
	{
		id: 7,
		title: 'Lidl',
		date: Date.now(),
		amount: -238.98,
	},
	{
		id: 8,
		title: 'Carrefour',
		date: Date.now(),
		amount: -12.3,
	},
	{
		id: 9,
		title: 'Income',
		date: Date.now(),
		amount: 1234.3,
	},
	{
		id: 10,
		title: 'Lidl',
		date: Date.now(),
		amount: -238.98,
	},
	{
		id: 11,
		title: 'Carrefour',
		date: Date.now(),
		amount: -12.3,
	},
	{
		id: 12,
		title: 'Income',
		date: Date.now(),
		amount: 1234.3,
	},
]

const TransactionsView = () => {
	const [search, setSearch] = useState('')

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<StyledText variant='h3'>Transakcje</StyledText>
				<View style={styles.searchBarContainer}>
					<SearchBar value={search} onChangeText={setSearch} />
				</View>
				<FlatList
					scrollsToTop={true}
					data={transactions}
					renderItem={({ item }) => (
						<TransactionItem
							key={item.id}
							title={item.title}
							amount={item.amount}
							date={item.date}
						/>
					)}
					style={{ marginBottom: 90 }}
				/>
			</View>
		</SafeAreaView>
	)
}

export default TransactionsView
