import { TBudgetItem } from '@/types/transaction'
import { useDeleteBudgetItem } from '@/firebase/transactions/useBudgetItems'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable'

type TransactionItemProps = {
  item: TBudgetItem
}

const TransactionItem = ({ item }: TransactionItemProps) => {
  const router = useRouter()
  const deleteBudgetItem = useDeleteBudgetItem()

  const onDelete = () => {
    if (item.id) deleteBudgetItem.mutate(item.id)
  }

  return (
    <ReanimatedSwipeable
      friction={2}
      rightThreshold={40}
      renderRightActions={() => <RightAction onDelete={onDelete} />}
    >
      <TouchableOpacity
        className='flex-row items-center bg-neutral-100'
        onPress={() => router.push(`/(transactions)/${item.id}`)}
        delayPressIn={100}
      >
        <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/proxy/K1fHHQlZQU3Jx7tyFJaIO9AVHZyc1uKLbBpZpvke-l2ri7l_lprdeWopERcRRVZNDDBrzzAk4s9FF9Hisj3os20Qy214T5qRQAQIN9qryOZi8AGc6F5rwpwQzw972nnquQ',
          }}
          className='w-20 h-20 p-3 bg-blue-500'
          resizeMode='contain'
        />

        <View className='flex-row justify-between items-center flex-1 p-4'>
          <View className='gap-1'>
            <Text
              className='font-bold max-w-44'
              numberOfLines={1}
              ellipsizeMode='tail'
            >
              {item.type === 'receipt' ? item.shopName : item.name}
            </Text>
            <Text className='text-sm text-neutral-700'>123</Text>
          </View>
          <Text
            className={`font-bold ${
              item.type === 'income'
                ? 'text-green-600'
                : item.type === 'expense' || item.type === 'receipt'
                  ? 'text-red-600'
                  : 'text-gray-800'
            }`}
          >
            {item.type === 'income' && '+'}
            {item.amount.toFixed(2)}
            PLN
          </Text>
        </View>
      </TouchableOpacity>
    </ReanimatedSwipeable>
  )
}

function RightAction({ onDelete }: { onDelete: () => void }) {
  return (
    <TouchableOpacity
      onPress={onDelete}
      style={{
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: '100%',
      }}
    >
      <Text style={{ color: 'white', fontWeight: 'bold' }}>Delete</Text>
    </TouchableOpacity>
  )
}

export default TransactionItem
