import { COLORS } from '@/constants/colors'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'

type CustomInputProps = {
  label: string
  props: TextInputProps
}

const CustomInput = ({ label, props }: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          { borderColor: isFocused ? COLORS.primary : COLORS.gray },
        ]}
        textContentType='none'
        autoCapitalize='none'
        {...props}
        placeholderTextColor={COLORS.gray}
        onFocus={() => {
          setIsFocused(true)
        }}
        onBlur={() => {
          setIsFocused(false)
        }}
      />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 8,
  },
  label: {
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  input: {
    height: 50,
    borderWidth: 1,
    fontFamily: 'Inter',
    width: '100%',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
})
