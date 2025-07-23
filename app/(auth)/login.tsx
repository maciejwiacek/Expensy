import CustomInput from '@/components/CustomInput'
import PrimaryButton from '@/components/PrimaryButton'
import { useAuth } from '@/context/useAuth'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Text, View } from 'react-native'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()

  const handleLogin = async () => {
    try {
      await login(email, password)
    } catch (error) {
      console.error('Login error:', error)
      alert('Błąd logowania')
    }
  }

  return (
    <View className='flex-1 justify-between my-16 mx-4'>
      <View>
        <Text className='text-4xl font-bold text-center mt-20'>
          Witaj w Expensy!
        </Text>
        <View className='mt-8 gap-5'>
          <CustomInput
            label='E-mail'
            placeholder='Podaj adres e-mail'
            value={email}
            onChangeText={setEmail}
          />
          <CustomInput
            label='Hasło'
            placeholder='Podaj hasło'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>
      <View>
        <PrimaryButton title='Zaloguj się' onPress={handleLogin} />
        <View className='flex-row justify-center mt-4'>
          <Text>Nie masz konta? </Text>
          <Link href='/register' className='text-blue-500 font-semibold'>
            Zarejestruj się
          </Link>
        </View>
      </View>
    </View>
  )
}

export default Login
