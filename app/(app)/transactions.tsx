import TransactionItem from '@/components/TransactionItem'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const Transactions = () => {
  return (
    <View className='flex-1 bg-white pt-24 px-4'>
      <Text className='text-xl font-bold'>Transakcje</Text>

      <View className='flex-row items-center w-full gap-x-4 my-4'>
        <TextInput
          className='bg-neutral-100 px-4 h-12 rounded-full flex-1'
          placeholder='Szukaj'
        />
        <TouchableOpacity className='bg-blue-600 w-12 h-12 rounded-full justify-center items-center'>
          <FontAwesome name='filter' size={24} color='white' />
        </TouchableOpacity>
      </View>

      <TransactionItem />
    </View>
  )
}

export default Transactions
