import { colors } from '@/constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.light100,
	},
	headerCard: {
		width: '100%',
		backgroundColor: colors.highlight500,
		paddingHorizontal: 20,
		paddingVertical: 30,
		borderRadius: 35,
		marginTop: 20,
	},
	content: {
		flex: 1,
		paddingHorizontal: 24,
		paddingBottom: 20,
	},
	whiteFont: {
		color: 'white',
	},
	balanceContainer: {
		flexDirection: 'row',
		alignItems: 'baseline',
	},
	header: {
		alignItems: 'center',
		marginTop: 20,
		marginBottom: 30,
	},
	detailsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 30,
	},
	detailsContent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconContainer: {
		padding: 10,
		backgroundColor: colors.highlight300,
		height: 30,
		width: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 15,
		marginRight: 10,
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
