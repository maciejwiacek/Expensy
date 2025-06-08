import { Stack } from 'expo-router'

const Layout = () => {
	return (
		<Stack>
			<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
			<Stack.Screen
				name='add-transaction/add-manually'
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='add-transaction/scan-receipt'
				options={{ headerShown: false }}
			/>
		</Stack>
	)
}

export default Layout
