import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import StyledText from '../StyledText/StyledText'
import { colors } from '@/constants/colors'

const PrimaryButton = ({
	title,
	style,
	onPress,
}: {
	title: string
	style?: object
	onPress: () => void
}) => {
	return (
		<TouchableOpacity style={[styles.container, style]} onPress={onPress}>
			<StyledText variant='actionL' style={styles.title}>
				{title}
			</StyledText>
		</TouchableOpacity>
	)
}

export default PrimaryButton
