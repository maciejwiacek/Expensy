import { Tabs } from 'expo-router'

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='home'
        options={{
          title: 'Strona Główna',
          headerShown: false,
          animation: 'fade',
        }}
      />
      <Tabs.Screen
        name='transactions'
        options={{ title: 'Transakcje', headerShown: false, animation: 'fade' }}
      />
      <Tabs.Screen
        name='analytics'
        options={{ title: 'Analiza', headerShown: false, animation: 'fade' }}
      />
      <Tabs.Screen
        name='profile'
        options={{ title: 'Profil', headerShown: false, animation: 'fade' }}
      />
    </Tabs>
  )
}
