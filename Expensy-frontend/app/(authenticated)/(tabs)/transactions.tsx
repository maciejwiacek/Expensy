import IconButton from '@/components/IconButton'
import SearchBar from '@/components/SearchBar'
import TransactionItem from '@/components/TransactionItem'
import { Colors } from '@/constants/Colors'
import { useTransactions } from '@/hooks/useTransactions'
import React, { useState } from 'react'
import {
	Keyboard,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native'

const Transactions = () => {
	const [searchValue, setSearchValue] = useState('')
	const { transactionsQuery } = useTransactions()

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SafeAreaView style={styles.container}>
				<View style={styles.content}>
					<Text style={styles.headerTitle}>Transakcje</Text>
					<View style={styles.searchBarContainer}>
						<View style={{ flex: 1 }}>
							<SearchBar
								value={searchValue}
								onChangeText={setSearchValue}
							/>
						</View>
						<IconButton
							icon={'filter'}
							onPress={() => {}}
							size={45}
						/>
					</View>
					<View style={{ gap: 15 }}>
						{transactionsQuery.isLoading && (
							<Text>Ładowanie...</Text>
						)}
						{transactionsQuery.isError && (
							<Text>
								Błąd: {transactionsQuery.error?.message}
							</Text>
						)}
						{transactionsQuery.data?.map((tx) => (
							<TransactionItem
								key={tx.id}
								shopName={tx.title}
								date={new Date(tx.date).toLocaleDateString(
									'pl-PL'
								)}
								amount={
									tx.type === 'expense'
										? tx.amount * -1
										: tx.amount
								}
								onPress={() => {}}
							/>
						))}
						{transactionsQuery.data?.length === 0 && (
							<Text>Brak transakcji</Text>
						)}
					</View>
				</View>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	)
}

export default Transactions

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	content: {
		marginHorizontal: 24,
		marginTop: 24,
	},
	headerTitle: {
		fontFamily: 'Inter',
		fontSize: 20,
		fontWeight: '800',
		color: Colors.dark500,
	},
	searchBarContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		marginVertical: 24,
	},
})
