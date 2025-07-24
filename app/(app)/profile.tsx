import { useAuth } from '@/context/useAuth'
import React from 'react'
import { Button, View } from 'react-native'

const Profile = () => {
  const { logout } = useAuth()
  return (
    <View className='flex-1 bg-white justify-center items-center'>
      <Button title='Logout' onPress={logout} />
    </View>
  )
}

export default Profile
