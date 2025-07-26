import { Tabs } from 'expo-router'

export default function Layout() {
  return (
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
  )
}
