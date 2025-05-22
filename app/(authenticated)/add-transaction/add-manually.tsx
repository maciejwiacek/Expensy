import DropdownPicker from '@/components/DropdownPicker'
import NavBar from '@/components/NavBar'
import TextInput from '@/components/TextInput'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'
import { CaretLeft } from 'phosphor-react-native'
import React, { useState } from 'react'
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from 'react-native'
const AddManually = () => {
	const router = useRouter()
	const [showTypePicker, setShowTypePicker] = useState(false)
	const [showCategoryPicker, setShowCategoryPicker] = useState(false)

	const [type, setType] = useState('')
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState('')
	const [date, setDate] = useState('')
	const [category, setCategory] = useState('')
	const [description, setDescription] = useState('')

	const types = [
		{ label: 'Wydatek', value: 'expense' },
		{ label: 'Przychód', value: 'income' },
	]
	const categories = [
		{ label: 'Zakupy', value: 'shopping' },
		{ label: 'Rozrywka', value: 'entertainment' },
		{ label: 'Restauracje', value: 'restaurants' },
		{ label: 'Opłaty', value: 'bills' },
		{ label: 'Subskrypcje', value: 'subscriptions' },
		{ label: 'Transport', value: 'transport' },
		{ label: 'Inne', value: 'other' },
	]
	return (
		<SafeAreaView style={styles.container}>
			<NavBar
				title={'Dodaj Transakcję'}
				leftButton={{
					icon: (
						<CaretLeft
							size={20}
							color={Colors.highlight500}
							weight={'bold'}
						/>
					),
					onPress: () => {
						console.log('back')
						router.back()
					},
				}}
				rightButton={{
					label: 'Zapisz',
					onPress: () => {
						console.log('Your data:', {
							type,
							title,
							price,
							date,
							category,
							description,
						})
						router.back()
					},
				}}
			/>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}
				keyboardVerticalOffset={20}
			>
				<TouchableWithoutFeedback
					onPress={() => {
						Keyboard.dismiss()
						setShowCategoryPicker(false)
						setShowTypePicker(false)
					}}
				>
					<View style={styles.content}>
						<View style={{ gap: 30 }}>
							<DropdownPicker
								items={types}
								value={type}
								setValue={setType}
								open={showTypePicker}
								setOpen={setShowTypePicker}
								placeholder='Wybierz typ transakcji'
							/>
							<TextInput
								placeholder='Wprowadź nazwę'
								label={'Nazwa'}
								onChangeText={setTitle}
								value={title}
							/>
							<TextInput
								placeholder='Wprowadź kwotę'
								label={'Kwota'}
								onChangeText={setPrice}
								value={price}
								keyboardType='numeric'
							/>
							<TextInput
								placeholder='Wprowadź datę'
								label={'Data'}
								onChangeText={setDate}
								value={date}
							/>
							<DropdownPicker
								items={categories}
								value={category}
								setValue={setCategory}
								open={showCategoryPicker}
								setOpen={setShowCategoryPicker}
								placeholder='Wybierz kategorię'
							/>
							<TextInput
								placeholder='Wprowadź opis'
								label={'Opis'}
								onChangeText={setDescription}
								value={description}
							/>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}

export default AddManually

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	content: {
		marginHorizontal: 24,
		marginTop: 20,
		paddingBottom: 40,
	},
	scrollContent: {
		flexGrow: 1,
	},
})
