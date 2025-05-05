import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import StyledText from '../StyledText/StyledText'
import { DotsThree } from 'phosphor-react-native'

const formatCardNumber = (number: number) => {
	let numberString = number.toString()

	if (numberString.length != 16) return null

	const lastLetters = numberString.slice(16 - 4, 16)
	return '**** **** **** ' + lastLetters
}

const Card = ({
	amount,
	cardNumber,
	provider,
}: {
	amount: number
	cardNumber: number
	provider: string
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.balanceContainer}>
					<StyledText variant='h2' style={styles.fontWhite}>
						{amount.toLocaleString('PL-pl') + ' '}
					</StyledText>
					<StyledText variant='h3' style={styles.fontWhite}>
						PLN
					</StyledText>
				</View>
				<StyledText variant='h4' style={styles.fontWhite}>
					{formatCardNumber(cardNumber)}
				</StyledText>
			</View>
			<View style={styles.content}>
				<TouchableOpacity>
					<DotsThree color='white' weight='bold' size={28} />
				</TouchableOpacity>
				<StyledText variant='h2' style={styles.fontWhite}>
					{provider}
				</StyledText>
			</View>
		</View>
	)
}

export default Card
