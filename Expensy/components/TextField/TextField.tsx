import { View, TextInput, KeyboardTypeOptions } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import globalStyles from '@/constants/globalStyles'

const TextField = ({
	title,
	value,
	onChangeText,
	style,
	keyboardType = 'default',
	secureTextEntry = false,
	autoCapitalize = 'none',
}: {
	title: string
	value: string
	onChangeText: (text: string) => void
	style?: object
	keyboardType?: KeyboardTypeOptions
	secureTextEntry?: boolean
	autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
}) => {
	const [isFocused, setIsFocused] = useState(false)
	return (
		<View style={style}>
			<TextInput
				value={value}
				onChangeText={onChangeText}
				placeholder={title}
				style={[
					globalStyles.bodyM,
					styles.textInput,
					isFocused && styles.focused,
				]}
				keyboardType={keyboardType}
				secureTextEntry={secureTextEntry}
				autoCapitalize={autoCapitalize}
				textContentType='oneTimeCode'
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
		</View>
	)
}

export default TextField
