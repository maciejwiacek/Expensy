import { colors } from '@/constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	searchBarContainer: {
		flexDirection: 'row',
		backgroundColor: colors.light200,
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderRadius: 50,
		flex: 1,
		marginRight: 15,
	},
	iconContainer: {
		marginRight: 10,
		marginTop: 2,
	},
	filterButton: {
		aspectRatio: 1,
		backgroundColor: colors.highlight500,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default styles
