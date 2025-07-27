import Heading from '@/components/Heading'
import { useRouter } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const AddExpense = () => {
  const router = useRouter()

  const handleAddPress = () => {
    // Logic to handle adding an expense

    router.back()
  }

  return (
    <View className='flex-1 bg-white pt-20 px-4'>
      <Heading
        title='Dodaj Transakcję'
        onPress={handleAddPress}
        buttonLabel='Dodaj'
      />
    </View>
  )
}
export default AddExpense
