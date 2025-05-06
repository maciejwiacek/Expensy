import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { FunnelSimple, MagnifyingGlass, XCircle } from 'phosphor-react-native'
import styles from './styles'
import globalStyles from '@/constants/globalStyles'

const SearchBarComponent = ({
	value,
	onChangeText,
}: {
	value: string
	onChangeText: React.Dispatch<React.SetStateAction<string>>
}) => {
	const handleClear = () => {
		onChangeText('')
	}

	return (
		<View style={styles.container}>
			<View style={styles.searchBarContainer}>
				<MagnifyingGlass size={16} style={styles.iconContainer} />
				<TextInput
					placeholder='Search'
					style={[globalStyles.bodyM, { flex: 1 }]}
					value={value}
					onChangeText={onChangeText}
					returnKeyType='search'
				/>
				{value.length > 0 && (
					<TouchableOpacity
						onPress={handleClear}
						style={styles.clearButton}
					>
						<XCircle size={20} color='gray' weight='bold' />
					</TouchableOpacity>
				)}
			</View>
			<TouchableOpacity style={styles.filterButton}>
				<FunnelSimple color='white' weight='bold' />
			</TouchableOpacity>
		</View>
	)
}

const SearchBar = React.memo(SearchBarComponent)

export default SearchBar
