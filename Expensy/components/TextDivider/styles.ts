import { colors } from '@/constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	divider: {
		height: 1,
		flex: 1,
		backgroundColor: colors.light500,
	},
	text: {
		textAlign: 'center',
		marginHorizontal: 10,
		color: colors.dark100,
	},
})

export default styles
