import FormInput from '@/components/FormInput'
import Heading from '@/components/Heading'
import SelectableButton from '@/components/SelectableButton'
import { useRouter } from 'expo-router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'

type TExpense = {
  type: 'income' | 'expense'
  name: string
  amount: number
  category: string
  description?: string
}

const AddExpense = () => {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TExpense>({
    defaultValues: {
      type: 'expense',
    },
  })

  const transactionType = watch('type')

  const handleAddPress = () => {
    // Logic to handle adding an expense

    router.back()
  }

  return (
    <View className='flex-1 bg-white pt-20 px-4'>
      <Heading
        title='Dodaj Transakcję'
        onPress={handleSubmit(handleAddPress)}
        buttonLabel='Dodaj'
      />

      <View className='flex-1 mt-10 gap-6'>
        <View className='flex-row justify-between gap-6'>
          <SelectableButton
            label='Przychód'
            value='income'
            selectedValue={transactionType}
            onSelect={(value) => setValue('type', value)}
          />
          <SelectableButton
            label='Wydatek'
            value='expense'
            selectedValue={transactionType}
            onSelect={(value) => setValue('type', value)}
          />
        </View>

        <FormInput<TExpense>
          control={control}
          name='name'
          label='Nazwa'
          placeholder='Podaj nazwę transakcji'
          errors={errors}
        />

        <FormInput<TExpense>
          control={control}
          name='amount'
          label='Kwota'
          placeholder='Podaj kwotę transakcji'
          errors={errors}
          inputProps={{ keyboardType: 'numeric' }}
        />

        <FormInput<TExpense>
          control={control}
          name='category'
          label='Kategoria'
          placeholder='Wybierz kategorię'
          errors={errors}
        />

        <FormInput<TExpense>
          control={control}
          name='description'
          label='Opis (opcjonalnie)'
          placeholder='Dodaj opis transakcji'
          errors={errors}
          inputProps={{ multiline: true, numberOfLines: 3 }}
        />
      </View>
    </View>
  )
}
export default AddExpense
