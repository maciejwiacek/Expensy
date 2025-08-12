import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { useRouter } from 'expo-router'

type FloatingActionMenuProps = {
  isActive: boolean
  onClose: () => void
}

const FloatingActionMenu = ({ isActive, onClose }: FloatingActionMenuProps) => {
  const router = useRouter()
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          router.push('/(app)/home/scanReceipt')
          onClose()
        }}
        className={`absolute bottom-[80px] right-6 ${isActive ? 'flex' : 'hidden'} bg-blue-500 py-4 w-[200px] rounded-full flex-row items-center justify-center gap-4 z-50`}
      >
        <FontAwesome6 name='receipt' size={18} color='white' />
        <Text className='text-white font-semibold'>Skanuj paragon</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          router.push('/(app)/home/addTransaction')
          onClose()
        }}
        className={`absolute bottom-[140px] right-6 ${isActive ? 'flex' : 'hidden'} bg-blue-500 py-4 w-[200px] rounded-full flex-row items-center justify-center gap-4 z-50`}
      >
        <FontAwesome6 name='money-bill' size={18} color='white' />
        <Text className='text-white font-semibold'>Dodaj transakcję</Text>
      </TouchableOpacity>
    </>
  )
}

export default FloatingActionMenu
