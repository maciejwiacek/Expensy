import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Tabs } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const queryClient = new QueryClient()

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <Tabs>
            <Tabs.Screen
              name='home'
              options={{
                title: 'Strona Główna',
                headerShown: false,
              }}
            />
            <Tabs.Screen
              name='transactions'
              options={{ title: 'Transakcje', headerShown: false }}
            />
            <Tabs.Screen
              name='analytics'
              options={{ title: 'Analiza', headerShown: false }}
            />
            <Tabs.Screen
              name='profile'
              options={{ title: 'Profil', headerShown: false }}
            />
          </Tabs>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}
