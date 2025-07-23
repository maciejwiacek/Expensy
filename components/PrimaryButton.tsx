import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type PrimaryButtonProps = {
  title: string
  onPress: () => void
}

const PrimaryButton = ({ title, onPress }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      className='bg-blue-600 h-14 w-full rounded-2xl items-center justify-center'
      onPress={onPress}
    >
      <Text className='text-white font-semibold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton
