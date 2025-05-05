import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Plus } from 'phosphor-react-native'
import { colors } from '@/constants/colors'

const FloatingActionButton = () => {
	return (
		<TouchableOpacity
			style={{
				position: 'absolute',
				bottom: 10,
				right: 24,
				backgroundColor: colors.highlight500,
				width: 60,
				height: 60,
				borderRadius: 30,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Plus size={24} color={'white'} weight='bold' />
		</TouchableOpacity>
	)
}

export default FloatingActionButton
