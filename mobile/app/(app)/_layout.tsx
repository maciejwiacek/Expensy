import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Tabs } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

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
                tabBarIcon: ({ color }) => (
                  <FontAwesome6 name='house' size={20} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name='transactions'
              options={{
                title: 'Transakcje',
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <FontAwesome6 name='money-bill' size={20} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name='analytics'
              options={{
                title: 'Analiza',
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <FontAwesome6 name='chart-line' size={20} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name='profile'
              options={{
                title: 'Profil',
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <FontAwesome6 name='user-large' size={20} color={color} />
                ),
              }}
            />
          </Tabs>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}
