import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import React from 'react'
import { TouchableOpacity } from 'react-native'

type FloatingActionButtonProps = {
  onPress?: () => void
}

const FloatingActionButton = ({ onPress }: FloatingActionButtonProps) => {
  return (
    <TouchableOpacity
      className='absolute bottom-6 right-6 bg-blue-500 rounded-full w-14 h-14 justify-center items-center z-50'
      onPress={onPress}
    >
      <FontAwesome6 name='plus' size={22} color='white' />
    </TouchableOpacity>
  )
}

export default FloatingActionButton
