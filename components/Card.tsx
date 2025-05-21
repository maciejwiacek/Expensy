import { Colors } from '@/constants/Colors'
import { DotsThreeOutline } from 'phosphor-react-native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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
				<Image
					source={{
						uri: 'https://i0.wp.com/americassbdc.org/wp-content/uploads/2021/05/Visa-logo-white.png?fit=900%2C291&ssl=1',
					}}
					width={64}
					height={18}
					resizeMode='contain'
				/>
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
})
