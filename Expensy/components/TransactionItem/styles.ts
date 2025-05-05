import { colors } from '@/constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	content: {
		flex: 1,
		flexDirection: 'row',
		borderRadius: 15,
		marginTop: 15,
		overflow: 'hidden',
	},
	iconContainer: {
		backgroundColor: colors.light300,
		aspectRatio: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	contentRight: {
		paddingHorizontal: 16,
		paddingVertical: 13,
		justifyContent: 'space-between',
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		backgroundColor: colors.light200,
	},
	textLeft: {
		justifyContent: 'space-between',
	},
	expenseColor: {
		color: colors.error300,
	},
	incomeColor: {
		color: colors.success300,
	},
})

export default styles
