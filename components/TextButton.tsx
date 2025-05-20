import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

const TextButton = ({
	title,
	onPress,
	size = 14,
}: {
	title: string
	onPress: () => void
	size?: number
}) => {
	return (
		<Text style={[styles.text, { fontSize: size }]} onPress={onPress}>
			{title}
		</Text>
	)
}

export default TextButton

const styles = StyleSheet.create({
	text: {
		fontFamily: 'Inter',
		color: Colors.highlight500,
		fontSize: 14,
		fontWeight: '600',
	},
})
