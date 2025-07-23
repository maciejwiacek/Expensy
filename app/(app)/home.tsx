import { useAuth } from '@/context/useAuth'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Home = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  if (!user) return null

  return (
    <View className='my-16 mx-4'>
      <Text className='text-xl font-semibold'>Witaj ponownie,</Text>
      <Text className='text-2xl font-bold'>
        {user?.displayName?.slice(0, 1).toUpperCase() +
          user?.displayName?.slice(1)}
        !
      </Text>
      <Text>Twoje saldo</Text>
      <Text>123.456,78 PLN</Text>
      <Button title='Logout' onPress={handleLogout} />
    </View>
  )
}

export default Home
