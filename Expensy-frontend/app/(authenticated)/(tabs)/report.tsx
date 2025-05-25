import { Colors } from '@/constants/Colors'
import { Barricade } from 'phosphor-react-native'
import React from 'react'
import { Text, View } from 'react-native'

const Report = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'white',
			}}
		>
			<Text
				style={{
					fontFamily: 'Inter',
					fontWeight: '700',
					fontSize: 24,
					color: Colors.highlight500,
				}}
			>
				Coming soon...
			</Text>
			<Barricade size={64} color={Colors.highlight500} />
		</View>
	)
}

export default Report
