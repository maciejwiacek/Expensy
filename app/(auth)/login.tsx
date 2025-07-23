import CustomInput from '@/components/CustomInput'
import PrimaryButton from '@/components/PrimaryButton'
import { useAuth } from '@/context/useAuth'
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
        <Text>Witaj w Expensy!</Text>
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
      <PrimaryButton title='Zaloguj się' onPress={handleLogin} />
    </View>
  )
}

export default Login
