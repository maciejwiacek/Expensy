import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type HeadingProps = {
  title: string
  onPress: () => void
  buttonLabel: string
}

const Heading = ({ title, onPress, buttonLabel }: HeadingProps) => {
  const router = useRouter()

  const handleBackPress = () => {
    router.back()
  }

  return (
    <View className='flex-row items-center justify-between'>
      <TouchableOpacity className='flex-1' onPress={handleBackPress}>
        <FontAwesome6 name='chevron-left' size={24} color='#2563eb' />
      </TouchableOpacity>
      <Text className='text-center text-xl font-bold'>{title}</Text>
      <TouchableOpacity className='flex-1 items-end' onPress={onPress}>
        <Text className='text-blue-600 font-bold text-lg'>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Heading
