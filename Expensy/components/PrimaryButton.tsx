import { COLORS } from '@/constants/colors'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface PrimaryButtonProps {
  onPress: () => void
  title: string
}

const PrimaryButton = ({ onPress, title }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontWeight: '600',
  },
})
