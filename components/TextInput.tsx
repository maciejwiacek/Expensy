import { Colors } from '@/constants/Colors'
import { Eye, EyeSlash } from 'phosphor-react-native'
import React, { useState } from 'react'
import {
	TextInput as RNTextInput,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'

const TextInput = ({
	placeholder,
	label,
	value,
	onChangeText,
	secureTextEntry = false,
}: {
	placeholder: string
	label: string
	value: string
	onChangeText: React.Dispatch<React.SetStateAction<string>>
	secureTextEntry?: boolean
}) => {
	const [isFocused, setIsFocused] = useState(false)
	const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry)

	const toggleSecureTextEntry = () => {
		setIsSecureTextEntry(!isSecureTextEntry)
	}

	return (
		<View>
			<Text style={styles.label}>{label}</Text>
			<View
				style={[
					styles.textInputContainer,
					isFocused && { borderColor: Colors.highlight500 },
				]}
			>
				<RNTextInput
					style={styles.textInput}
					placeholder={placeholder}
					value={value}
					onChangeText={onChangeText}
					secureTextEntry={isSecureTextEntry}
					placeholderTextColor={Colors.dark100}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					keyboardType='default'
				/>
				{secureTextEntry && (
					<TouchableOpacity
						onPress={toggleSecureTextEntry}
						style={styles.icon}
					>
						{isSecureTextEntry ? (
							<Eye
								size={18}
								color={Colors.light500}
								weight='fill'
							/>
						) : (
							<EyeSlash
								size={18}
								color={Colors.light500}
								weight='fill'
							/>
						)}
					</TouchableOpacity>
				)}
			</View>
		</View>
	)
}

export default TextInput

const styles = StyleSheet.create({
	label: {
		fontFamily: 'Inter',
		fontSize: 14,
		fontWeight: '700',
		color: Colors.dark400,
		marginBottom: 10,
	},
	textInput: {
		fontFamily: 'Inter',
		fontSize: 14,
		color: Colors.dark500,
		flex: 1,
		height: 50,
	},
	icon: {
		marginLeft: 10,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textInputContainer: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 16,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: Colors.light500,
	},
})
