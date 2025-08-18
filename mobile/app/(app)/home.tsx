import FloatingActionButton from '@/components/FloatingActionButton'
import TransactionItem from '@/components/TransactionItem'
import { useBudgetItems } from '@/firebase/transactions/useBudgetItems'
import { useRouter } from 'expo-router'
import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import Animated, { LinearTransition } from 'react-native-reanimated'

const Home = () => {
  const router = useRouter()
  const { data: budgetItems } = useBudgetItems()

  // Calculate total balance from all budget items
  const totalBalance =
    budgetItems?.reduce((acc, curr) => acc + (curr.amount ?? 0), 0) ?? 0

  return (
    <View className='flex-1 bg-white relative'>
      <FloatingActionButton
        onPress={() => router.push('/(transactions)/addTransaction')}
      />

      <View className='flex-1 mt-24 mx-4'>
        <View className='bg-white pb-4'>
          <Text className='text-lg font-semibold'>Twoje saldo</Text>
          <Text className='text-3xl font-bold'>
            {totalBalance.toFixed(2)} PLN
          </Text>
        </View>

        <FlatList
          data={budgetItems}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 14,
            flexGrow: 1,
            paddingBottom: 80,
          }}
          ListHeaderComponent={
            <View className='flex-row justify-between items-center py-2'>
              <Text className='text-lg font-semibold'>Pozycje Budżetowe</Text>
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
              <TransactionItem item={item} />
            </Animated.View>
          )}
          keyExtractor={(item) => item.id || Math.random().toString()}
        />
      </View>
    </View>
  )
}

export default Home
