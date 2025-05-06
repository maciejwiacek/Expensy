import { colors } from '@/constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 10,
		right: 24,
		backgroundColor: colors.highlight500,
		width: 50,
		height: 50,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	primaryButton: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	wideButtonContainer: {
		position: 'absolute',
		right: 24,
		backgroundColor: colors.highlight500,
		height: 50,
		width: 190,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	lowerButton: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	buttonText: {
		color: 'white',
		marginLeft: 5,
	},
})

export default styles
