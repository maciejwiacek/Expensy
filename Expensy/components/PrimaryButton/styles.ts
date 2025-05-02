import { colors } from '@/constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: 24,
		paddingVertical: 18,
		backgroundColor: colors.highlight500,
		borderRadius: 12,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		color: colors.light100,
	},
})

export default styles
