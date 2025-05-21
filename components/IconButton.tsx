import { Colors } from '@/constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
const IconButton = ({
	icon,
	color = Colors.highlight500,
	iconColor = 'white',
	size = 60,
	onPress,
}: {
	icon: any
	color?: string
	iconColor?: string
	size?: number
	onPress: () => void
}) => {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: color, width: size }]}
			onPress={onPress}
		>
			<FontAwesome name={icon} color={iconColor} size={20} />
		</TouchableOpacity>
	)
}

export default IconButton

const styles = StyleSheet.create({
	button: {
		aspectRatio: 1,
		borderRadius: 55,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
