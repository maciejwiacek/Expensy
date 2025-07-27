import FloatingActionButton from '@/components/FloatingActionButton'
import TransactionItem from '@/components/TransactionItem'
import { useTransactions } from '@/lib/firebase/transactions/useTransactions'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated'

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
          <Text className='text-3xl font-bold'>123.456,78 PLN</Text>
        </View>

        <Animated.FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
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
              entering={FadeIn}
              exiting={FadeOut}
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
