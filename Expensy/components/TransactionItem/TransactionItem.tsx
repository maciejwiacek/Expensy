import { View, Text } from 'react-native'
import React from 'react'
import { ShoppingBag } from 'phosphor-react-native'
import styles from './styles'
import StyledText from '../StyledText/StyledText'
import { Double } from 'react-native/Libraries/Types/CodegenTypes'
import { colors } from '@/constants/colors'

const TransactionItem = ({
	title,
	date,
	amount,
}: {
	title: string
	date: number
	amount: Double
}) => {
	const formattedDate = () => {
		const dateType = new Date(date)
		return dateType.toLocaleDateString('PL-pl')
	}
	return (
		<View style={styles.content}>
			<View style={styles.iconContainer}>
				<ShoppingBag
					weight='regular'
					color={colors.highlight500}
					size={40}
				/>
			</View>
			<View style={styles.contentRight}>
				<View style={styles.textLeft}>
					<StyledText variant='h4' style={{ marginBottom: 5 }}>
						{title}
					</StyledText>
					<StyledText variant='bodyM'>{formattedDate()}</StyledText>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
					<StyledText
						variant='h4'
						style={
							amount > 0
								? styles.incomeColor
								: styles.expenseColor
						}
					>
						{amount.toFixed(2)}
					</StyledText>
					<StyledText
						variant='h5'
						style={
							amount > 0
								? styles.incomeColor
								: styles.expenseColor
						}
					>
						PLN
					</StyledText>
				</View>
			</View>
		</View>
	)
}

export default TransactionItem
