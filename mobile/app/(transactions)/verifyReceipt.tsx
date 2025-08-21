import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useReceiptStore } from '@/stores/receiptStore'
import Heading from '@/components/Heading'
import { FlatList } from 'react-native-gesture-handler'
import PrimaryButton from '@/components/PrimaryButton'
import { getDateFromTimestamp } from '@/utils/getDateFromTimestamp'
import ReceiptWrapper from '@/components/ReceiptWrapper'

const VerifyReceipt = () => {
  const receipt = useReceiptStore((state) => state.currentReceipt)

  if (!receipt) {
    return <Text>No receipt found</Text>
  }

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
    <View className='flex-1 bg-white pt-20 pb-12 px-4'>
      <Heading
        title='Zweryfikuj dane'
        onPress={() => {}}
        buttonLabel='Edytuj'
      />
      <ReceiptWrapper style={{ flex: 1, marginTop: 30, marginBottom: 50 }}>
        <View className='p-5'>
          <Text>{receipt.shopName}</Text>
          <Text>{`${formattedDate} • ${formattedTime}`}</Text>
          <ScrollView nestedScrollEnabled>
            {receipt.products.map((item) => (
              <View key={item.name} className='flex-row justify-between'>
                <Text>{item.name}</Text>
                <Text>
                  {item.quantity} x {item.price.toFixed(2)}
                </Text>
              </View>
            ))}
          </ScrollView>
          {/* <Text>Sum {receipt.amount.toFixed(2).toString()}</Text> */}
        </View>
      </ReceiptWrapper>
      <PrimaryButton title='Zatwierdź' onPress={() => {}} />
    </View>
  )
}

export default VerifyReceipt
