import { colors } from '@/constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.light100,
	},
	content: {
		flex: 1,
		paddingHorizontal: 24,
	},
	header: {
		alignItems: 'center',
		marginTop: 20,
		marginBottom: 20,
	},
	listHeaderContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'baseline',
		marginTop: 30,
	},
	textGray: {
		color: colors.dark300,
	},
})

export default styles
