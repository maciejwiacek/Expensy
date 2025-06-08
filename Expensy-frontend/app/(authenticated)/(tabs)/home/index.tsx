import Card from '@/components/Card'
import IconButton from '@/components/IconButton'
import TextButton from '@/components/TextButton'
import TransactionItem from '@/components/TransactionItem'
import { Colors } from '@/constants/Colors'
import { useTransactions } from '@/hooks/useTransactions'
import { useUser } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Home = () => {
	const { user } = useUser()
	const router = useRouter()
	const userName = user?.username
		? user.username.charAt(0).toUpperCase() + user.username.slice(1)
		: 'Błąd użytkownika!'
	const { transactionsQuery } = useTransactions()

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<FlatList
					data={transactionsQuery.data || []}
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
					contentContainerStyle={{ gap: 15, paddingBottom: 100 }}
					showsVerticalScrollIndicator={false}
					ListHeaderComponent={() => (
						<>
							<Text style={styles.titleText}>
								Witaj ponownie,
							</Text>
							<Text style={styles.usernameText}>{userName}!</Text>
							<Card amount={123.45} />
							<View style={styles.transactionsHeaderContainer}>
								<Text style={styles.titleText}>Transakcje</Text>
								<TextButton
									title={'Zobacz wszystkie'}
									onPress={() =>
										router.navigate('/transactions')
									}
								/>
							</View>
						</>
					)}
				/>
			</View>
			<View style={styles.fabContainer}>
				<IconButton
					icon={'plus'}
					size={50}
					onPress={() => {
						// router.push('/add-transaction/add-manually')
						router.push('/add-transaction/scan-receipt')
					}}
				/>
			</View>
		</SafeAreaView>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	content: {
		marginHorizontal: 24,
		marginTop: 24,
		flex: 1,
	},
	titleText: {
		fontFamily: 'Inter',
		fontWeight: '700',
		fontSize: 18,
		color: Colors.dark500,
	},
	usernameText: {
		fontFamily: 'Inter',
		fontWeight: '800',
		fontSize: 24,
		color: Colors.dark500,
		marginBottom: 24,
	},
	transactionsHeaderContainer: {
		flexDirection: 'row',
		alignItems: 'baseline',
		justifyContent: 'space-between',
		marginBottom: 10,
		marginTop: 30,
	},
	fabContainer: {
		position: 'absolute',
		bottom: 24,
		right: 24,
	},
})
