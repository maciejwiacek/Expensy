import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const OutlinedButton = ({
	title,
	onPress,
}: {
	title: string
	onPress: () => void
}) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	)
}

export default OutlinedButton

const styles = StyleSheet.create({
	button: {
		borderColor: Colors.highlight500,
		borderWidth: 2,
		height: 50,
		paddingHorizontal: 16,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontFamily: 'Inter',
		fontSize: 14,
		color: Colors.highlight500,
		fontWeight: '600',
	},
})
