import FloatingActionButton from '@/components/FloatingActionButton'
import TransactionItem from '@/components/TransactionItem'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Home = () => {
  const router = useRouter()

  return (
    <View className='flex-1 bg-white relative'>
      <FloatingActionButton />

      <View className='mt-24 mb-16 mx-4'>
        <View>
          <Text className='text-lg font-semibold'>Twoje saldo</Text>
          <Text className='text-3xl font-bold'>123.456,78 PLN</Text>
        </View>

        {/* Transactions header */}
        <View className='flex-row justify-between items-center my-6'>
          <Text className='text-lg font-semibold'>Transakcje</Text>
          <TouchableOpacity onPress={() => router.push('/transactions')}>
            <Text className='text-sm text-neutral-700'>Zobacz wszystkie</Text>
          </TouchableOpacity>
        </View>

        <TransactionItem />
      </View>
    </View>
  )
}

export default Home
