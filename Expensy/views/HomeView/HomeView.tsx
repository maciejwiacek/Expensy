import { View, Text, SafeAreaView } from 'react-native'
import { auth } from '../../firebaseConfig'
import styles from './styles'
import StyledText from '@/components/StyledText/StyledText'

export default function HomeView() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<View style={styles.header}>
					<View style={styles.balanceContainer}>
						<StyledText variant='h1' style={styles.whiteFont}>
							12.870,00
						</StyledText>
						<StyledText variant='h3' style={styles.whiteFont}>
							PLN
						</StyledText>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}
