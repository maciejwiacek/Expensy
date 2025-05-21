import { useRouter } from 'expo-router'
import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'

const Test = () => {
	const router = useRouter()
	return (
		<SafeAreaView>
			<Text>Test</Text>
			<Button title='Go back' onPress={() => router.back()} />
		</SafeAreaView>
	)
}

export default Test
