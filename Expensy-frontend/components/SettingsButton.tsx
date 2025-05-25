import { Colors } from '@/constants/Colors'
import { CaretRight } from 'phosphor-react-native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const SettingsButton = ({
	title,
	color = Colors.dark500,
	onPress,
}: {
	title: string
	color?: string
	onPress: () => void
}) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Text style={[styles.title, { color: color }]}>{title}</Text>
			<CaretRight size={16} weight='bold' color={Colors.dark100} />
		</TouchableOpacity>
	)
}

export default SettingsButton

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 26,
	},
	title: {
		fontFamily: 'Inter',
		fontSize: 14,
	},
})
