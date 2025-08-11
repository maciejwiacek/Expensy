import Heading from '@/components/Heading'
import { useTransaction } from '@/lib/firebase/transactions/useTransactions'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const TransactionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { data: transaction } = useTransaction(id)

  if (!transaction) return null

  return (
    <View className='flex-1 bg-white pt-20 px-4'>
      <Heading
        title={transaction?.name}
        buttonLabel='Edytuj'
        onPress={() => {}}
      />
    </View>
  )
}

export default TransactionDetails
