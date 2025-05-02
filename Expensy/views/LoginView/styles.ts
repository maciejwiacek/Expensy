import { colors } from '@/constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	content: {
		flex: 1,
		paddingHorizontal: 24,
		justifyContent: 'space-between',
		paddingTop: 75,
		paddingBottom: 30,
	},
	title: {
		color: colors.highlight500,
		textAlign: 'center',
		marginBottom: 15,
	},
	slang: {
		color: colors.dark100,
		textAlign: 'center',
	},
	topButtonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
		width: '100%',
	},
	textField: {
		marginBottom: 15,
	},
	forgotPassword: {
		alignItems: 'flex-end',
	},
	redirectButton: {
		marginTop: 15,
		alignItems: 'center',
	},
})

export default styles
