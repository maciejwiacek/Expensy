import FloatingActionButton from '@/components/FloatingActionButton'
import TransactionItem from '@/components/TransactionItem'
import { useRouter } from 'expo-router'
import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

const Home = () => {
  const router = useRouter()

  const transactions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // Example data

  return (
    <View className='flex-1 bg-white relative'>
      {/* FloatingActionButton stays fixed */}
      <FloatingActionButton />

      <View className='flex-1 mt-24 mx-4'>
        <View className='bg-white pb-4'>
          <Text className='text-lg font-semibold'>Twoje saldo</Text>
          <Text className='text-3xl font-bold'>123.456,78 PLN</Text>
        </View>

        <FlatList
          data={transactions}
          renderItem={({ item }) => <TransactionItem />}
          keyExtractor={(item) => item.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 14,
            flexGrow: 1,
            paddingBottom: 80,
          }}
          ListHeaderComponent={
            <View className='flex-row justify-between items-center py-2'>
              <Text className='text-lg font-semibold'>Transakcje</Text>
              <TouchableOpacity onPress={() => router.push('/transactions')}>
                <Text className='text-sm text-neutral-700'>
                  Zobacz wszystkie
                </Text>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
    </View>
  )
}

export default Home
