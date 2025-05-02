import { View } from 'react-native'
import React from 'react'
import styles from './styles'
import StyledText from '../StyledText/StyledText'

const TextDivider = ({ title }: { title: string }) => {
	return (
		<View style={styles.container}>
			<View style={styles.divider} />
			<StyledText variant='bodyS' style={styles.text}>
				{title}
			</StyledText>
			<View style={styles.divider} />
		</View>
	)
}

export default TextDivider
