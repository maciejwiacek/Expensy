import { Colors } from '@/constants/Colors'
import { DotsThreeOutline } from 'phosphor-react-native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BrandIcon from './BrandIcon'
const Card = () => {
	return (
		<View style={styles.container}>
			<View style={styles.leftSideContainer}>
				<Text style={styles.amountText}>
					154.845,72 <Text style={{ fontSize: 20 }}>PLN</Text>
				</Text>
				<Text style={styles.cardNumberText}>**** **** **** 1234</Text>
			</View>
			<View style={styles.rightSideContainer}>
				<TouchableOpacity hitSlop={10}>
					<DotsThreeOutline weight='fill' size={18} color='white' />
				</TouchableOpacity>
				<View style={styles.iconContainer}>
					<BrandIcon name='Visa' color='white' size={60} />
				</View>
			</View>
		</View>
	)
}

export default Card

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.highlight500,
		width: '100%',
		aspectRatio: 1.66,
		borderRadius: 35,
		paddingHorizontal: 30,
		paddingVertical: 35,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	leftSideContainer: {
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	rightSideContainer: {
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	amountText: {
		fontFamily: 'Inter',
		fontWeight: '700',
		fontSize: 24,
		color: 'white',
	},
	cardNumberText: {
		fontFamily: 'Inter',
		fontWeight: '700',
		fontSize: 16,
		color: 'white',
	},
	iconContainer: {
		position: 'absolute',
		bottom: -15,
	},
})
