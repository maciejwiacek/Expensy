import { useAuth } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useCameraPermission } from 'react-native-vision-camera'

export default function Index() {
	const { isLoaded, isSignedIn } = useAuth()
	const router = useRouter()
	const { hasPermission, requestPermission } = useCameraPermission()
	const [hasMounted, setHasMounted] = useState(false)

	// Wait for initial render to complete, test before deployment if needed
	useEffect(() => {
		setHasMounted(true)
		requestPermission()
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
