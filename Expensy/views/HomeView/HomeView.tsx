import {
	View,
	SafeAreaView,
	ScrollView,
	FlatList,
	TouchableOpacity,
} from 'react-native'
import { auth } from '../../firebaseConfig'
import styles from './styles'
import StyledText from '@/components/StyledText/StyledText'
import TextButton from '@/components/TextButton/TextButton'
import { colors } from '@/constants/colors'
import { useRouter } from 'expo-router'
import TransactionItem from '@/components/TransactionItem/TransactionItem'
import FloatingActionButton from '@/components/FloatingActionButton/FloatingActionButton'
import Card from '@/components/Card/Card'

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
]

export default function HomeView() {
	const router = useRouter()
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.content}>
				<View style={styles.header}>
					<View
						style={{ justifyContent: 'flex-start', width: '100%' }}
					>
						<StyledText variant='h3' style={styles.textGray}>
							Witaj ponownie,
						</StyledText>
						<StyledText variant='h1'>
							{auth.currentUser?.displayName.split(' ')[0] ||
								'Jan'}
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
					<StyledText variant='h3'>Ostatnie transakcje</StyledText>
					<TextButton
						title='Zobacz wszystkie'
						onPress={() => {
							router.replace('/(tabs)/transactions')
						}}
						style={{ color: colors.dark100 }}
					/>
				</View>
				<FlatList
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
				/>
			</ScrollView>
			<FloatingActionButton />
		</SafeAreaView>
	)
}
