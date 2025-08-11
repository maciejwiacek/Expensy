import FormInput from '@/components/FormInput'
import PrimaryButton from '@/components/PrimaryButton'
import { useAuth } from '@/context/useAuth'
import loginSchema from '@/lib/schemas/loginSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'expo-router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native'

type LoginFormValues = {
  email: string
  password: string
}

const Login = () => {
  const { login } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  })

  const handleLogin = async (data: LoginFormValues) => {
    try {
      await login(data.email, data.password)
    } catch (error) {
      console.error('Login error:', error)
      alert('Błąd logowania')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className='flex-1 justify-between my-16 mx-4'>
        <View>
          <Text className='text-4xl font-bold text-center mt-20'>
            Witaj w Expensy!
          </Text>
          <View className='mt-8 gap-5'>
            <FormInput<LoginFormValues>
              name='email'
              control={control}
              errors={errors}
              label='E-mail'
              placeholder='Podaj adres e-mail'
            />

            <FormInput<LoginFormValues>
              name='password'
              control={control}
              errors={errors}
              label='Hasło'
              placeholder='Podaj hasło'
              inputProps={{ secureTextEntry: true }}
            />
          </View>
        </View>
        <View>
          <PrimaryButton
            title='Zaloguj się'
            onPress={handleSubmit(handleLogin)}
          />
          <View className='flex-row justify-center mt-4'>
            <Text>Nie masz konta? </Text>
            <Link href='/register' className='text-blue-500 font-semibold'>
              Zarejestruj się
            </Link>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Login
