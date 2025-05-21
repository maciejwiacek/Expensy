import { Stack } from 'expo-router'

const Layout = () => {
	return (
		<Stack>
			<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
			<Stack.Screen
				name='add-transaction/test'
				options={{ headerShown: false }}
			/>
		</Stack>
	)
}

export default Layout
