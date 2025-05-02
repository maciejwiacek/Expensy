import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg'

const { width } = Dimensions.get('window')

const GradientCard = ({ children }) => {
	const cardWidth = width * 0.9
	const cardHeight = 120

	return (
		<View style={styles.cardContainer}>
			<Svg
				width={cardWidth}
				height={cardHeight}
				style={StyleSheet.absoluteFill}
			>
				<Defs>
					<LinearGradient id='grad' x1='0' y1='0' x2='1' y2='0'>
						<Stop offset='0' stopColor='#006FFD' />
						<Stop offset='1' stopColor='#4DA0FF' />
					</LinearGradient>
				</Defs>
				<Rect
					x='0'
					y='0'
					rx='20'
					ry='20'
					width={cardWidth}
					height={cardHeight}
					fill='url(#grad)'
				/>
			</Svg>

			{/* Add any components inside here */}
			<View style={styles.content}>{children}</View>
		</View>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		width: width * 0.9,
		height: 120,
		marginVertical: 10,
		borderRadius: 20,
		overflow: 'hidden',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	content: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
	},
})

export default GradientCard
