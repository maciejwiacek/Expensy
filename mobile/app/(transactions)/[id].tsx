import Heading from '@/components/Heading'
import Receipt from '@/components/Receipt'
import { useBudgetItem } from '@/firebase/transactions/useBudgetItems'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const TransactionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { data: item } = useBudgetItem(id)

  if (!item) return null

  return (
    <View className='flex-1 bg-white pt-20 px-4'>
      <Heading
        title={item.type === 'receipt' ? item.shopName : item.name}
        buttonLabel='Edytuj'
        onPress={() => {}}
      />
      {item.type === 'receipt' && (
        <View className='flex-1 justify-center items-center'>
          <Receipt receipt={item} />
        </View>
      )}
    </View>
  )
}

export default TransactionDetails
