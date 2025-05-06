import { View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { auth } from '../../firebaseConfig'
import styles from './styles'
import StyledText from '@/components/StyledText/StyledText'
import TextButton from '@/components/TextButton/TextButton'
import { colors } from '@/constants/colors'
import { useRouter } from 'expo-router'
import TransactionItem from '@/components/TransactionItem/TransactionItem'
import FloatingActionButton from '@/components/FloatingActionButton/FloatingActionButton'
import Card from '@/components/Card/Card'
import { generateDevTransactions } from '@/dev/transactionsList'

const transactions = generateDevTransactions()
	.sort((a, b) => b.createdAt - a.createdAt)
	.slice(0, 10)

export default function HomeView() {
	const router = useRouter()

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				style={styles.content}
				data={transactions}
				renderItem={(item) => (
					<TouchableOpacity>
						<TransactionItem
							key={item.item.id}
							title={item.item.title}
							amount={item.item.amount}
							date={item.item.date}
						/>
					</TouchableOpacity>
				)}
				ListHeaderComponent={() => {
					return (
						<>
							<View style={styles.header}>
								<View
									style={{
										justifyContent: 'flex-start',
										width: '100%',
									}}
								>
									<StyledText
										variant='h3'
										style={styles.textGray}
									>
										Witaj ponownie,
									</StyledText>
									<StyledText variant='h1'>
										{auth.currentUser?.displayName.split(
											' '
										)[0] || 'Jan'}
										!
									</StyledText>
								</View>
							</View>
							<Card
								amount={123456.78}
								cardNumber={1234123412341234}
								provider='ING'
							/>
							<View style={styles.listHeaderContainer}>
								<StyledText variant='h3'>
									Ostatnie transakcje
								</StyledText>
								<TextButton
									title='Zobacz wszystkie'
									onPress={() => {
										router.replace('/(tabs)/transactions')
									}}
									style={{ color: colors.dark100 }}
								/>
							</View>
						</>
					)
				}}
			/>
			<FloatingActionButton />
		</SafeAreaView>
	)
}
