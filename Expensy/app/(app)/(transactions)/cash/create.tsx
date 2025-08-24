import FormInput from '@/components/FormInput'
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

  const onSubmit = async (data: NewCashEntry) => {
    console.log(data)
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={globalStyles.container}>
        <Text>CashCreate</Text>
        <FormInput
          control={control}
          name='name'
          label='Nazwa'
          placeholder='Podaj nazwę'
        />
        <FormInput
          control={control}
          name='amount'
          label='Kwota'
          placeholder='Podaj kwotę'
        />
        <Button title='Dodaj' onPress={handleSubmit(onSubmit)} />
        <Button title='Go back' onPress={() => router.back()} />
      </View>
    </SafeAreaView>
  )
}

export default CashCreate
