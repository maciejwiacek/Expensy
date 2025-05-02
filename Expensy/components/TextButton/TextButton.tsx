import React from 'react'
import styles from './styles'
import { TouchableOpacity } from 'react-native'
import StyledText from '../StyledText/StyledText'

const TextButton = ({
	title,
	onPress,
	style,
}: {
	title: string
	onPress: () => void
	style?: object
}) => {
	return (
		<TouchableOpacity onPress={onPress} style={style}>
			<StyledText variant='actionM' style={styles.title}>
				{title}
			</StyledText>
		</TouchableOpacity>
	)
}

export default TextButton
