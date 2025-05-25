import { Colors } from '@/constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const SearchBar = ({
	value,
	onChangeText,
}: {
	value: string
	onChangeText: React.Dispatch<React.SetStateAction<string>>
}) => {
	return (
		<View style={styles.container}>
			<FontAwesome name='search' size={16} color={Colors.dark400} />
			<TextInput
				placeholder='Szukaj'
				placeholderTextColor={Colors.dark100}
				style={styles.input}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	)
}

export default SearchBar

const styles = StyleSheet.create({
	container: {
		height: 45,
		borderRadius: 24,
		backgroundColor: Colors.light200,
		paddingHorizontal: 16,
		paddingVertical: 12,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
	},
	input: {
		fontFamily: 'Inter',
		color: Colors.dark500,
		fontSize: 16,
		flex: 1,
		height: 40,
	},
})
