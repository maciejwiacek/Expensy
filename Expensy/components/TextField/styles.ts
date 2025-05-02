import { colors } from '@/constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	textInput: {
		width: '100%',
		borderRadius: 14,
		paddingVertical: 18,
		paddingHorizontal: 24,
		backgroundColor: colors.light200,
	},
	header: {
		color: colors.dark400,
		marginBottom: 10,
	},
	focused: {
		borderWidth: 1,
		borderColor: colors.highlight500,
	},
})

export default styles
