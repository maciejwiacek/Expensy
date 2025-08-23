import { ClerkProvider, useAuth } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Inter_400Regular, useFonts } from '@expo-google-fonts/inter'
import { Stack } from 'expo-router'
import { ActivityIndicator, StatusBar, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const RootLayout = () => {
  const { isLoaded, isSignedIn } = useAuth()

  if (!isLoaded) {
    return <ActivityIndicator size='large' />
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={isSignedIn === false}>
        <Stack.Screen name='(auth)' />
      </Stack.Protected>
      <Stack.Protected guard={isSignedIn === true}>
        <Stack.Screen name='(app)' />
      </Stack.Protected>
    </Stack>
  )
}

const ProviderLayout = () => {
  const [fontsLoaded] = useFonts({
    Inter: Inter_400Regular,
  })

  if (!fontsLoaded) {
    return <ActivityIndicator size='large' />
  }

  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle='dark-content' />
        <RootLayout />
      </SafeAreaView>
    </ClerkProvider>
  )
}

export default ProviderLayout

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
})
