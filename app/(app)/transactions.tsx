import TransactionItem from '@/components/TransactionItem'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'

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

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={() => <TransactionItem />}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{ gap: 14, flexGrow: 1, paddingBottom: 14 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Transactions
