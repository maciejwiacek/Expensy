import { Colors } from '@/constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
const IconButton = ({
	icon,
	color = Colors.highlight500,
	iconColor = 'white',
	size = 60,
	hitSlop = 10,
	onPress,
}: {
	icon: any
	color?: string
	iconColor?: string
	size?: number
	hitSlop?: number
	onPress: () => void
}) => {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: color, width: size }]}
			onPress={onPress}
			hitSlop={hitSlop}
		>
			<FontAwesome name={icon} color={iconColor} size={size / 3} />
		</TouchableOpacity>
	)
}

export default IconButton

const styles = StyleSheet.create({
	button: {
		aspectRatio: 1,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
