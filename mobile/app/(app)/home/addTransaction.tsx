import FormInput from '@/components/FormInput'
import Heading from '@/components/Heading'
import SelectableButton from '@/components/SelectableButton'
import { useCreateTransaction } from '@/lib/firebase/transactions/useTransactions'
import { TTransaction } from '@/lib/types/transaction'
import { useRouter } from 'expo-router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'

const AddTransaction = () => {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TTransaction>({
    defaultValues: {
      type: 'expense',
      amount: 0,
    },
  })
  const transactionType = watch('type')

  const createMutation = useCreateTransaction()

  const handleAddPress = (data: TTransaction) => {
    const sanitizedAmount =
      typeof data.amount === 'string'
        ? Number((data.amount as string).replace(',', '.'))
        : data.amount
    const formattedAmount =
      data.type === 'expense' ? -sanitizedAmount : sanitizedAmount

    if (isNaN(sanitizedAmount)) {
      alert('Kwota musi być liczbą')
      return
    }

    createMutation.mutate(
      { ...data, amount: formattedAmount },
      {
        onSuccess: () => {
          router.back()
        },
        onError: (error) => {
          alert(`Wystąpił błąd podczas dodawania transakcji. ${error}`)
        },
      }
    )
  }

  return (
    <View className='flex-1 bg-white pt-20 px-4'>
      <Heading
        title='Dodaj Transakcję'
        onPress={handleSubmit(handleAddPress)}
        buttonLabel='Dodaj'
      />

      <View className='flex-1 mt-10 gap-6'>
        <View className='flex-row justify-between gap-4'>
          <SelectableButton
            label='Wydatek'
            value='expense'
            selectedValue={transactionType}
            onSelect={(value) => setValue('type', value)}
          />
          <SelectableButton
            label='Przychód'
            value='income'
            selectedValue={transactionType}
            onSelect={(value) => setValue('type', value)}
          />
        </View>

        <FormInput<TTransaction>
          control={control}
          name='name'
          label='Nazwa'
          placeholder='Podaj nazwę transakcji'
          errors={errors}
          inputProps={{ maxLength: 25 }}
        />

        <FormInput<TTransaction>
          control={control}
          name='amount'
          label='Kwota'
          placeholder='Podaj kwotę transakcji'
          errors={errors}
          inputProps={{ keyboardType: 'numeric' }}
        />

        <FormInput<TTransaction>
          control={control}
          name='category'
          label='Kategoria'
          placeholder='Wybierz kategorię'
          errors={errors}
        />

        <FormInput<TTransaction>
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
export default AddTransaction
