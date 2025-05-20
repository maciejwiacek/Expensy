import { useAuth } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'

const Home = () => {
	const { signOut } = useAuth()
	const router = useRouter()
	return (
		<SafeAreaView>
			<Text>Home</Text>
			<Button
				title='Log out'
				onPress={() => {
					signOut()
					router.replace('/(authentication)/login')
				}}
			/>
		</SafeAreaView>
	)
}

export default Home
