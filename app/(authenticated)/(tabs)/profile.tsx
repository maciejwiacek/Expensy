import { Colors } from '@/constants/Colors'
import { useAuth } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { Button, SafeAreaView, Text } from 'react-native'

const Profile = () => {
	const { signOut } = useAuth()
	const router = useRouter()
	return (
		<SafeAreaView>
			<Text>Profile</Text>
			<Button
				title='Log out'
				onPress={() => {
					signOut()
					router.replace('/(authentication)/login')
				}}
				color={Colors.warning300}
			/>
		</SafeAreaView>
	)
}

export default Profile
