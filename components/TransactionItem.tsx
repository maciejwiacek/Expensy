import { Colors } from '@/constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Float } from 'react-native/Libraries/Types/CodegenTypes'

const TransactionItem = ({
	shopName,
	date,
	amount,
	onPress,
}: {
	shopName: string
	date: string
	amount: Float
	onPress: () => void
}) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<View style={styles.iconContainer}>
				<FontAwesome name='apple' size={33} color={'white'} />
			</View>
			<View style={styles.content}>
				<View style={styles.contentLeft}>
					<Text style={styles.titleText}>{shopName}</Text>
					<Text style={styles.dateText}>{date}</Text>
				</View>
				<Text
					style={[
						styles.titleText,
						{
							color:
								amount > 0
									? Colors.success300
									: Colors.warning300,
						},
					]}
				>
					{amount}PLN
				</Text>
			</View>
		</TouchableOpacity>
	)
}

export default TransactionItem

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 70,
		borderRadius: 16,
		overflow: 'hidden',
		backgroundColor: Colors.light200,
	},
	iconContainer: {
		backgroundColor: Colors.highlight500,
		width: 80,
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 16,
		alignItems: 'center',
	},
	contentLeft: {
		gap: 5,
	},
	titleText: {
		fontFamily: 'Inter',
		fontSize: 16,
		fontWeight: '700',
		color: Colors.dark500,
	},
	dateText: {
		fontFamily: 'Inter',
		fontSize: 14,
		color: Colors.dark100,
	},
})
