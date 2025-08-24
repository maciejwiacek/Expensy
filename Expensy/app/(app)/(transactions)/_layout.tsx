import { Stack } from 'expo-router'
import React from 'react'

const TransactionsLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='cash/create' />
    </Stack>
  )
}

export default TransactionsLayout
