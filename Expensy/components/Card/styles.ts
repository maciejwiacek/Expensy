import { colors } from '@/constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.highlight500,
		borderRadius: 35,
		height: 215,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 35,
		paddingHorizontal: 30,
	},
	content: {
		height: '100%',
		justifyContent: 'space-between',
	},
	fontWhite: {
		color: 'white',
	},
	balanceContainer: {
		flexDirection: 'row',
		alignItems: 'baseline',
	},
})

export default styles
