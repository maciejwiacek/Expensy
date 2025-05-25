import { useAuth } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'

export default function Index() {
	const { isLoaded, isSignedIn } = useAuth()
	const router = useRouter()

	const [hasMounted, setHasMounted] = useState(false)

	// Wait for initial render to complete, test before deployment if needed
	useEffect(() => {
		setHasMounted(true)
	}, [])

	useEffect(() => {
		if (!hasMounted || !isLoaded) return

		if (isSignedIn) {
			router.replace('/(authenticated)/(tabs)/home')
		} else {
			router.replace('/(authentication)/login')
		}
	}, [hasMounted, isLoaded, isSignedIn])

	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<ActivityIndicator size='large' />
		</View>
	)
}
