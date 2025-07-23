import React from 'react'
import { Text, TextInput, View } from 'react-native'

type CustomInputProps = {
  label: string
  placeholder: string
  value: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
}

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: CustomInputProps) => {
  return (
    <View className='gap-2'>
      <Text className='font-semibold'>{label}</Text>
      <TextInput
        className='border border-neutral-300 focus:border-blue-500 p-4 rounded-2xl'
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        textContentType='none'
        autoCapitalize='none'
      />
    </View>
  )
}

export default CustomInput
