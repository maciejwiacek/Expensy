import { ClerkProvider } from '@clerk/clerk-expo'
import {
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_800ExtraBold,
	useFonts,
} from '@expo-google-fonts/inter'
import { Slot } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
import { ActivityIndicator } from 'react-native'

const CLERK_PUBLISHABLE_KEY = process.env
	.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string

if (!CLERK_PUBLISHABLE_KEY) {
	throw new Error(
		'Missing environment variable: EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY. Please set it in your .env file.'
	)
}

const tokenCache = {
	async getToken(key: string) {
		try {
			return SecureStore.getItemAsync(key)
		} catch (error) {
			return null
		}
	},
	async saveToken(key: string, value: string) {
		try {
			return SecureStore.setItemAsync(key, value)
		} catch (err) {
			return
		}
	},
}

const RootLayout = () => {
	const [fontsLoaded] = useFonts({
		Inter400: Inter_400Regular,
		Inter500: Inter_500Medium,
		Inter600: Inter_600SemiBold,
		Inter700: Inter_700Bold,
		Inter800: Inter_800ExtraBold,
	})

	if (!fontsLoaded) {
		return <ActivityIndicator size='large' />
	}
	return (
		<ClerkProvider
			publishableKey={CLERK_PUBLISHABLE_KEY}
			tokenCache={tokenCache}
		>
			<Slot />
		</ClerkProvider>
	)
}

export default RootLayout
