import { View, Text, SafeAreaView } from 'react-native'
import { auth } from '../../firebaseConfig'
import styles from './styles'
import StyledText from '@/components/StyledText/StyledText'
import GradientCard from '@/components/GradientCard/GradientCard'
import TextButton from '@/components/TextButton/TextButton'
import { colors } from '@/constants/colors'

export default function HomeView() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<View style={styles.header}>
					<View
						style={{ justifyContent: 'flex-start', width: '100%' }}
					>
						<StyledText variant='h3'>Witaj ponownie,</StyledText>
						<StyledText variant='h1'>
							{auth.currentUser?.displayName.split(' ')[0]}!
						</StyledText>
					</View>
					<GradientCard>
						<StyledText variant='h3' style={styles.whiteFont}>
							Saldo
						</StyledText>
						<View style={styles.balanceContainer}>
							<StyledText variant='h1' style={styles.whiteFont}>
								12.870,00
							</StyledText>
							<StyledText variant='h3' style={styles.whiteFont}>
								PLN
							</StyledText>
						</View>
					</GradientCard>
				</View>
				<View
					style={{
						flexDirection: 'row',
						width: '100%',
						justifyContent: 'space-between',
						alignItems: 'baseline',
					}}
				>
					<StyledText variant='h3'>Ostatnie transakcje</StyledText>
					<TextButton
						title='Zobacz wszystkie'
						onPress={() => {}}
						style={{ color: colors.dark100 }}
					/>
				</View>
			</View>
		</SafeAreaView>
	)
}
