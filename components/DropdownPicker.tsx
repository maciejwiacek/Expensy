import { Colors } from '@/constants/Colors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

const DropdownPicker = ({
	items,
	value,
	setValue,
	open,
	setOpen,
	placeholder,
}: {
	items: {
		label: string
		value: string
	}[]
	value: string
	setValue: React.Dispatch<React.SetStateAction<string>>
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	placeholder?: string
}) => {
	return (
		<View>
			<Text style={styles.label}>Typ Transakcji</Text>
			<DropDownPicker
				open={open}
				items={items}
				value={value}
				setOpen={setOpen}
				setValue={setValue}
				style={{
					borderColor: Colors.light500,
					height: 50,
					borderRadius: 12,
				}}
				arrowIconStyle={{ outlineColor: Colors.highlight500 }}
				textStyle={styles.chosenText}
				placeholder={placeholder || 'Wybierz'}
				placeholderStyle={{ color: Colors.dark100 }}
				dropDownContainerStyle={styles.dropdownContainer}
			/>
		</View>
	)
}

export default DropdownPicker

const styles = StyleSheet.create({
	label: {
		fontFamily: 'Inter',
		fontSize: 14,
		fontWeight: '700',
		color: Colors.dark400,
		marginBottom: 10,
	},
	chosenText: {
		fontFamily: 'Inter',
		fontSize: 14,
		color: Colors.dark500,
	},
	dropdownContainer: {
		borderColor: Colors.light500,
		borderRadius: 12,
	},
})
