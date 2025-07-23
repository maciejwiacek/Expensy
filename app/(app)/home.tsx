import { useAuth } from '@/context/useAuth'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Home = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <View>
      <Text>Hello, {user?.displayName}</Text>
      <Button title='Logout' onPress={handleLogout} />
    </View>
  )
}

export default Home
