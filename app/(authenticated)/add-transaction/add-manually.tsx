import TextInput from '@/components/TextInput'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, View } from 'react-native'

const Test = () => {
	const router = useRouter()
	const [type, setType] = useState('')
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState('')
	const [date, setDate] = useState('')
	const [category, setCategory] = useState('')
	const [description, setDescription] = useState('')
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<TextInput
					placeholder='Wprowadź nazwę'
					label={'Nazwa'}
					onChangeText={setTitle}
					value={title}
				/>
				<Button title='Go back' onPress={() => router.back()} />
			</View>
		</SafeAreaView>
	)
}

export default Test

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	content: {
		marginHorizontal: 24,
	},
})
