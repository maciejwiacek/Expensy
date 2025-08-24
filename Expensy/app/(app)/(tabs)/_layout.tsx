import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='home' options={{ title: 'Strona Główna' }} />
      <Tabs.Screen name='transactions' options={{ title: 'Transakcje' }} />
      <Tabs.Screen name='analytics' options={{ title: 'Analiza' }} />
      <Tabs.Screen name='settings' options={{ title: 'Ustawienia' }} />
    </Tabs>
  )
}

export default TabsLayout
