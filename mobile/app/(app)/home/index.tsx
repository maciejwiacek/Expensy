import FloatingActionButton from '@/components/FloatingActionButton'
import TransactionItem from '@/components/TransactionItem'
import { useTransactions } from '@/lib/firebase/transactions/useTransactions'
import { useRouter } from 'expo-router'
import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import Animated, { LinearTransition } from 'react-native-reanimated'

const Home = () => {
  const router = useRouter()
  const { data: transactions } = useTransactions()

  return (
    <View className='flex-1 bg-white relative'>
      <FloatingActionButton
        onPress={() => router.push('/(app)/home/addTransaction')}
      />

      <View className='flex-1 mt-24 mx-4'>
        <View className='bg-white pb-4'>
          <Text className='text-lg font-semibold'>Twoje saldo</Text>
          <Text className='text-3xl font-bold'>
            {transactions
              ?.reduce((acc, curr) => {
                acc += curr.amount
                return acc
              }, 0)
              .toFixed(2)}{' '}
            PLN
          </Text>
        </View>

        <FlatList
          data={transactions}
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
          renderItem={({ item }) => (
            <Animated.View
              layout={LinearTransition}
              className='rounded-2xl overflow-hidden'
            >
              <TransactionItem transaction={item} />
            </Animated.View>
          )}
        />
      </View>
    </View>
  )
}

export default Home
