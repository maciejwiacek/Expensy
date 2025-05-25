import { Colors } from '@/constants/Colors'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type NavBarButtonProps = {
	label?: string
	icon?: React.ReactNode
	onPress: () => void
}

const NavBar = ({
	title,
	leftButton,
	rightButton,
}: {
	title: string
	leftButton?: NavBarButtonProps
	rightButton?: NavBarButtonProps
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.side}>
				{leftButton?.icon && (
					<TouchableOpacity
						style={styles.touchable}
						onPress={leftButton.onPress}
						hitSlop={10}
					>
						{leftButton.icon}
					</TouchableOpacity>
				)}
			</View>

			<View style={styles.center}>
				<Text style={styles.title}>{title}</Text>
			</View>

			<View style={styles.side}>
				{rightButton?.label && (
					<TouchableOpacity
						style={styles.touchable}
						onPress={rightButton.onPress}
						hitSlop={10}
					>
						<Text style={styles.text}>{rightButton.label}</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	)
}

export default NavBar

const SIDE_WIDTH = 60

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 60,
		paddingHorizontal: 16,
	},
	side: {
		width: SIDE_WIDTH,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	center: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontFamily: 'Inter',
		fontSize: 16,
		fontWeight: '700',
		color: '#000',
	},
	touchable: {
		padding: 8,
	},
	text: {
		fontFamily: 'Inter',
		color: Colors.highlight500,
		fontSize: 14,
		fontWeight: '600',
	},
})
