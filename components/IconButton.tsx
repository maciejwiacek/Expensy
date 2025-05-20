import { Colors } from '@/constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
const IconButton = ({
	icon,
	color = Colors.highlight500,
	onPress,
}: {
	icon: any
	color?: string
	onPress: () => void
}) => {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: color }]}
			onPress={onPress}
		>
			<FontAwesome name={icon} color={'white'} size={20} />
		</TouchableOpacity>
	)
}

export default IconButton

const styles = StyleSheet.create({
	button: {
		width: 60,
		height: 60,
		borderRadius: 55,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
