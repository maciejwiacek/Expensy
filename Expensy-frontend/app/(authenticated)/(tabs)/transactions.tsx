import IconButton from '@/components/IconButton'
import SearchBar from '@/components/SearchBar'
import TransactionItem from '@/components/TransactionItem'
import { Colors } from '@/constants/Colors'
import { useTransactions } from '@/hooks/useTransactions'
import React, { useState } from 'react'
import {
	FlatList,
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
					<View style={{ gap: 15 }}>
						<FlatList
							data={transactionsQuery.data?.filter((item) =>
								item.title
									.toLowerCase()
									.includes(searchValue.toLowerCase())
							)}
							renderItem={({ item }) => (
								<TransactionItem
									key={item.id}
									shopName={item.title}
									date={item.date}
									amount={
										item.type === 'expense'
											? item.amount * -1
											: item.amount
									}
									onPress={() => {}}
								/>
							)}
							contentContainerStyle={{ gap: 15 }}
							showsVerticalScrollIndicator={false}
							ListHeaderComponent={() => (
								<View
									style={{
										backgroundColor: 'white',
										paddingTop: 24,
									}}
								>
									<Text style={styles.headerTitle}>
										Transakcje
									</Text>
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
								</View>
							)}
							stickyHeaderHiddenOnScroll={true}
							stickyHeaderIndices={[0]}
						/>
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
