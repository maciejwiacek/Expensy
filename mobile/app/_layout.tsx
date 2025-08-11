import { AuthProvider, useAuth } from '@/context/useAuth'
import { Stack } from 'expo-router'
import { ActivityIndicator } from 'react-native'
import '../global.css'

const ProtectedLayout = () => {
  const { user, loading } = useAuth()

  if (loading) return <ActivityIndicator />

  const isAuthenticated = user !== null

  return (
    <Stack>
      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen name='(app)' options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  )
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <ProtectedLayout />
    </AuthProvider>
  )
}
