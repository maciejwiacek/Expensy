import { colors } from '@/constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.dark400,
	},
	content: {
		flex: 1,
		paddingHorizontal: 24,
	},
	whiteFont: {
		color: 'white',
	},
	balanceContainer: {
		flexDirection: 'row',
		alignItems: 'baseline',
	},
	header: {
		alignItems: 'center',
	},
})

export default styles
