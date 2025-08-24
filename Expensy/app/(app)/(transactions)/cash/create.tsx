import { NewCashEntry } from '@/types/CashEntry'
import { globalStyles } from '@/utils/globalStyles'
import { router } from 'expo-router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, SafeAreaView, Text, View } from 'react-native'

const CashCreate = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewCashEntry>({})
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={globalStyles.container}>
        <Text>CashCreate</Text>
        <Button title='Go back' onPress={() => router.back()} />
      </View>
    </SafeAreaView>
  )
}

export default CashCreate
