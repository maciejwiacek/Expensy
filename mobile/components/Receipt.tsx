import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { TReceipt } from '@/types/transaction'
import ReceiptWrapper from './ReceiptWrapper'
import { getDateFromTimestamp } from '@/utils/getDateFromTimestamp'

type ReceiptProps = {
  receipt: TReceipt
}

const Receipt = ({ receipt }: ReceiptProps) => {
  const formattedDate = getDateFromTimestamp(receipt.date).toLocaleDateString(
    'pl-PL',
    {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }
  )
  const formattedTime = getDateFromTimestamp(receipt.date).toLocaleTimeString(
    'pl-PL',
    {
      hour: '2-digit',
      minute: '2-digit',
    }
  )

  return (
    <ReceiptWrapper
      style={{ flex: 1, maxHeight: 600, width: '100%', padding: 25 }}
    >
      <View className='flex-row justify-between items-baseline'>
        <Text className='text-lg font-bold'>{receipt.shopName}</Text>
        <Text className='text-sm text-gray-500'>{`${formattedDate} • ${formattedTime}`}</Text>
      </View>
      <View className='w-full h-[0.5px] bg-gray-300 my-4' />
      <View className='flex-row justify-between'>
        <Text>Produkt</Text>
        <Text>Cena</Text>
        <Text>Suma</Text>
      </View>
      <View className='w-full h-[0.5px] bg-gray-300 my-4' />
      <ScrollView>
        {receipt.products.map((item) => (
          <View
            key={item.name.toString()}
            className='flex-row justify-between py-2'
          >
            <Text>{`${item.quantity}x ${item.name}`}</Text>
            <Text>{item.price}</Text>
            <Text>{item.price * item.quantity}</Text>
          </View>
        ))}
      </ScrollView>
    </ReceiptWrapper>
  )
}

export default Receipt
