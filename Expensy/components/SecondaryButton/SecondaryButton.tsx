import { TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import StyledText from '../StyledText/StyledText'

const SecondaryButton = ({
	title,
	style,
	IconComponent,
	iconColor = '#000',
}: {
	title: string
	style?: object
	IconComponent?: React.ComponentType<any>
	iconColor?: string
}) => {
	return (
		<TouchableOpacity style={[styles.container, style]}>
			{IconComponent && (
				<IconComponent
					size={26}
					color={iconColor}
					weight={'fill'}
					style={styles.icon}
				/>
			)}
			<StyledText variant='actionM' style={styles.title}>
				{title}
			</StyledText>
		</TouchableOpacity>
	)
}

export default SecondaryButton
