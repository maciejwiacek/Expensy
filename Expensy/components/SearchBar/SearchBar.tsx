import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { FunnelSimple, MagnifyingGlass } from 'phosphor-react-native'
import styles from './styles'
import globalStyles from '@/constants/globalStyles'
import { colors } from '@/constants/colors'

const SearchBar = ({ value, onChangeText }) => {
	return (
		<View style={styles.container}>
			<View style={styles.searchBarContainer}>
				<MagnifyingGlass size={16} style={styles.iconContainer} />
				<TextInput
					placeholder='Search'
					style={globalStyles.bodyM}
					value={value}
					onChangeText={(props) => onChangeText(props)}
				/>
			</View>
			<TouchableOpacity style={styles.filterButton}>
				<FunnelSimple color='white' weight='bold' />
			</TouchableOpacity>
		</View>
	)
}

export default SearchBar
