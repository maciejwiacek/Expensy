import { StyleSheet } from 'react-native'
import { colors } from '@/constants/colors'

const styles = StyleSheet.create({
	container: {
		width: '100%',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingBottom: 32,
		paddingTop: 15,
		borderTopWidth: 1,
		borderTopColor: colors.light300,
	},
	tabButton: {
		flex: 1,
		alignItems: 'center',
	},
})

export default styles
