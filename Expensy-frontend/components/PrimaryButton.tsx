import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const PrimaryButton = ({
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

export default PrimaryButton

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.highlight500,
		height: 50,
		paddingHorizontal: 16,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontFamily: 'Inter',
		fontSize: 14,
		color: Colors.light100,
		fontWeight: '600',
	},
})
