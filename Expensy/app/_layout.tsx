import { Slot } from 'expo-router'
import { AuthProvider } from '../context/AuthContext'
import {
	Inter_100Thin,
	Inter_200ExtraLight,
	Inter_300Light,
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_800ExtraBold,
	Inter_900Black,
	useFonts,
} from '@expo-google-fonts/inter'
import { ActivityIndicator } from 'react-native'

export default function RootLayout() {
	const [loaded, error] = useFonts({
		InterThin: Inter_100Thin,
		InterExtraLight: Inter_200ExtraLight,
		InterLight: Inter_300Light,
		InterRegular: Inter_400Regular,
		InterMedium: Inter_500Medium,
		InterSemiBold: Inter_600SemiBold,
		InterBold: Inter_700Bold,
		InterExtraBold: Inter_800ExtraBold,
		InterBlack: Inter_900Black,
	})

	return (
		<AuthProvider>
			{!loaded && <ActivityIndicator />}
			<Slot />
		</AuthProvider>
	)
}
