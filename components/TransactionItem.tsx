import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const TransactionItem = () => {
  return (
    <TouchableOpacity className='flex-row items-center bg-neutral-100 rounded-2xl overflow-hidden'>
      <Image
        source={{
          uri: 'https://lh3.googleusercontent.com/proxy/K1fHHQlZQU3Jx7tyFJaIO9AVHZyc1uKLbBpZpvke-l2ri7l_lprdeWopERcRRVZNDDBrzzAk4s9FF9Hisj3os20Qy214T5qRQAQIN9qryOZi8AGc6F5rwpwQzw972nnquQ',
        }}
        className='w-20 h-20 p-3 bg-blue-500'
        resizeMode='contain'
      />

      <View className='flex-row justify-between items-center flex-1 p-4'>
        <View className='gap-1'>
          <Text className='font-bold'>Carrefour</Text>
          <Text className='text-sm text-neutral-700'>24.02.2025</Text>
        </View>
        <Text className='text-red-600 font-bold'>-304,98 PLN</Text>
      </View>
    </TouchableOpacity>
  )
}

export default TransactionItem
