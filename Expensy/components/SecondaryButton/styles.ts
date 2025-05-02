import { colors } from '@/constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.light200,
		borderRadius: 14,
		paddingVertical: 16,
		paddingHorizontal: 16,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	icon: {
		marginRight: 5,
	},
	title: {
		color: colors.dark300,
	},
})

export default styles
