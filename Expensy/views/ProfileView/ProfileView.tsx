import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { auth } from '../../firebaseConfig'
import { router } from 'expo-router'

const ProfileView = () => {
	const handleLogout = async () => {
		try {
			await auth.signOut()
			router.replace('/(auth)/login')
		} catch (error: any) {
			alert(error.message)
		}
	}
	return (
		<SafeAreaView>
			<Button title='Log Out' onPress={handleLogout} />
		</SafeAreaView>
	)
}

export default ProfileView
