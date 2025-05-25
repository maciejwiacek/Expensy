import { Colors } from '@/constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const CustomCheckbox = ({
	checked,
	setChecked,
}: {
	checked: boolean
	setChecked: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	const handlePress = () => {
		setChecked(!checked)
	}

	return (
		<TouchableOpacity
			style={[
				styles.container,
				checked ? styles.containerChecked : styles.containerUnchecked,
			]}
			onPress={handlePress}
		>
			{checked && <FontAwesome name='check' size={12} color={'white'} />}
		</TouchableOpacity>
	)
}

export default CustomCheckbox

const styles = StyleSheet.create({
	container: {
		width: 24,
		height: 24,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerChecked: { backgroundColor: Colors.highlight500 },
	containerUnchecked: { borderWidth: 1.5, borderColor: Colors.light500 },
})
