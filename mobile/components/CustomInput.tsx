import React from 'react'
import { Text, TextInput, TextInputProps, View } from 'react-native'

type CustomInputProps = {
  label: string
  props: TextInputProps
}

const CustomInput = ({ label, props }: CustomInputProps) => {
  return (
    <View className='gap-2'>
      <Text className='font-semibold'>{label}</Text>
      <TextInput
        className='border border-neutral-300 focus:border-blue-500 p-4 rounded-2xl'
        textContentType='none'
        autoCapitalize='none'
        {...props}
      />
    </View>
  )
}

export default CustomInput
