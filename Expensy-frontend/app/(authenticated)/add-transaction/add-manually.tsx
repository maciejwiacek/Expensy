import DropdownPicker from '@/components/DropdownPicker'
import NavBar from '@/components/NavBar'
import TextInput from '@/components/TextInput'
import { Colors } from '@/constants/Colors'
import { categories, types } from '@/constants/transactionOptions'
import { useTransactionForm, useTransactions } from '@/hooks/useTransactions'
import { useRouter } from 'expo-router'
import { CaretLeft } from 'phosphor-react-native'
import React, { useState } from 'react'
import {
	Alert,
	Keyboard,
	SafeAreaView,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from 'react-native'
const AddManually = () => {
	const router = useRouter()
	const [showTypePicker, setShowTypePicker] = useState(false)
	const [showCategoryPicker, setShowCategoryPicker] = useState(false)
	const { createTransaction } = useTransactions()
	const { form, updateField, setForm } = useTransactionForm()

	const handleCreateTransaction = () => {
		const amount = parseFloat(form.amount.trim().replace(',', '.'))

		if (!form.title || !form.type || !amount || !form.date) {
			Alert.alert(
				'Błąd',
				'Uzupełnij wymagane pola: typ, tytuł, kwota i data'
			)
			return
		}

		createTransaction(
			{
				amount,
				type: form.type,
				title: form.title,
				date: form.date,
				category: form.category,
				description: form.description,
			},
			{
				onSuccess: (data) => {
					Alert.alert('Transakcja zapisana', `ID: ${data.id}`)
				},
				onError: (error) => {
					console.error('Transaction creation error:', error)
					Alert.alert('Błąd', 'Nie udało się zapisać transakcji')
				},
			}
		)
	}

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
						router.back()
					},
				}}
				rightButton={{
					label: 'Zapisz',
					onPress: () => {
						handleCreateTransaction()
						router.back()
					},
				}}
			/>
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
							value={form.type}
							setValue={(val) => {
								const newValue =
									typeof val === 'function'
										? val(form.type)
										: val

								updateField(
									'type',
									newValue as 'income' | 'expense'
								)
							}}
							open={showTypePicker}
							setOpen={setShowTypePicker}
							placeholder='Wybierz typ transakcji'
							title='Typ transakcji'
						/>
						<TextInput
							placeholder='Wprowadź nazwę'
							label={'Nazwa'}
							value={form.title}
							onChangeText={(val) => updateField('title', val)}
						/>
						<TextInput
							placeholder='Wprowadź kwotę'
							label={'Kwota'}
							value={form.amount}
							onChangeText={(val) => {
								updateField('amount', val)
							}}
							keyboardType='numeric'
						/>
						<TextInput
							placeholder='Wprowadź datę'
							label={'Data'}
							value={form.date}
							onChangeText={(val) => updateField('date', val)}
						/>
						<DropdownPicker
							items={categories}
							value={form.category}
							setValue={(val) => {
								const newValue =
									typeof val === 'function'
										? val(form.category)
										: val

								updateField('category', newValue)
							}}
							open={showCategoryPicker}
							setOpen={setShowCategoryPicker}
							placeholder='Wybierz kategorię'
							title='Kategoria transakcji'
						/>
						<TextInput
							placeholder='Wprowadź opis'
							label={'Opis'}
							value={form.description}
							onChangeText={(val) =>
								updateField('description', val)
							}
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
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
})
