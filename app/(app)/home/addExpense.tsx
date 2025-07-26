import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const AddExpense = () => {
  const router = useRouter()

  const handleBackPress = () => {
    router.back()
  }

  return (
    <View className='flex-1 bg-white pt-20 px-4'>
      <View className='flex-row items-center justify-between'>
        <TouchableOpacity className='flex-1' onPress={handleBackPress}>
          <FontAwesome6 name='chevron-left' size={24} color='#2563eb' />
        </TouchableOpacity>
        <Text className='text-center text-xl font-bold'>Dodaj Transakcję</Text>
        <TouchableOpacity className='flex-1 items-end'>
          <Text className='text-blue-600 font-bold text-lg'>Dodaj</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default AddExpense
