import { COLORS } from '@/constants/colors'
import { FontAwesome6 } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

interface FloatingActionButtonProps {
  onPress: () => void
}

const FloatingActionButton = ({ onPress }: FloatingActionButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <FontAwesome6 name='plus' size={24} color='white' />
    </TouchableOpacity>
  )
}

export default FloatingActionButton

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 50,
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
