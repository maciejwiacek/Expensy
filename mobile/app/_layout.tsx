import { AuthProvider, useAuth } from '@/context/useAuth'
import { Stack } from 'expo-router'
import { ActivityIndicator } from 'react-native'
import '../global.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

const queryClient = new QueryClient()

const ProtectedLayout = () => {
  const { user, loading } = useAuth()

  if (loading) return <ActivityIndicator />

  const isAuthenticated = user !== null

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <Stack>
            <Stack.Protected guard={!isAuthenticated}>
              <Stack.Screen name='(auth)' options={{ headerShown: false }} />
            </Stack.Protected>

            <Stack.Protected guard={isAuthenticated}>
              <Stack.Screen name='(app)' options={{ headerShown: false }} />
              <Stack.Screen
                name='(transactions)'
                options={{ headerShown: false }}
              />
            </Stack.Protected>
          </Stack>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <ProtectedLayout />
    </AuthProvider>
  )
}
