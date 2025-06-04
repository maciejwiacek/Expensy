import Card from '@/components/Card'
import IconButton from '@/components/IconButton'
import TextButton from '@/components/TextButton'
import TransactionItem from '@/components/TransactionItem'
import { Colors } from '@/constants/Colors'
import { useTransactions } from '@/hooks/useTransactions'
import { useUser } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Home = () => {
	const { user } = useUser()
	const router = useRouter()
	const userName = user?.username
		? user.username.charAt(0).toUpperCase() + user.username.slice(1)
		: 'Błąd użytkownika!'
	const { data: transactions, isLoading, isError, error } = useTransactions()

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.titleText}>Witaj ponownie,</Text>
				<Text style={styles.usernameText}>{userName}!</Text>
				<Card />
				<View style={styles.transactionsHeaderContainer}>
					<Text style={styles.titleText}>Transakcje</Text>
					<TextButton
						title={'Zobacz wszystkie'}
						onPress={() => router.navigate('/transactions')}
					/>
				</View>
				<View style={{ gap: 15 }}>
					{isLoading && <Text>Ładowanie...</Text>}
					{isError && <Text>Błąd: {error?.message}</Text>}
					{transactions?.map((tx) => (
						<TransactionItem
							key={tx.id}
							shopName={tx.title}
							date={new Date(tx.date).toLocaleDateString('pl-PL')}
							amount={
								tx.type === 'expense'
									? tx.amount * -1
									: tx.amount
							}
							onPress={() => {}}
						/>
					))}
					{transactions?.length === 0 && <Text>Brak transakcji</Text>}
				</View>
			</View>
			<View style={styles.fabContainer}>
				<IconButton
					icon={'plus'}
					size={50}
					onPress={() => {
						router.push('/add-transaction/add-manually')
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
		marginBottom: 25,
		marginTop: 30,
	},
	fabContainer: {
		position: 'absolute',
		bottom: 24,
		right: 24,
	},
})
