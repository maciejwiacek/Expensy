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
		paddingTop: 50,
		paddingBottom: 20,
	},
	header: {
		marginBottom: 20,
	},
	textField: {
		marginTop: 20,
	},
	bottomPart: {
		alignItems: 'center',
	},
	loginButton: {
		color: colors.highlight500,
		marginTop: 15,
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
	privacyPolicyText: {
		color: colors.dark100,
		marginBottom: 15,
	},
	topButtonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
		width: '100%',
	},
})

export default styles
