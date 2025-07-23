import CustomInput from '@/components/CustomInput'
import PrimaryButton from '@/components/PrimaryButton'
import { useAuth } from '@/context/useAuth'
import { useState } from 'react'
import { Button, Text, View } from 'react-native'
const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { register } = useAuth()

  const API_KEY = process.env.EXPO_PUBLIC_FIREBASE_API_KEY

  const handleRegister = async () => {
    try {
      await register(username, email, password, confirmPassword)
    } catch (error) {
      console.error('Registration error:', error)
      alert('Rejestracja nie powiodła się. Spróbuj ponownie.')
    }
  }

  return (
    <View className='flex-1 justify-between my-16 mx-4'>
      <View>
        <Text className='text-2xl font-bold'>Zarejestruj się!</Text>
        <Text className='text-neutral-500'>
          Załóż konto, aby dołączyć do Expensy!
        </Text>

        <Button
          title='Test'
          onPress={() => {
            console.log(`API Key: ${API_KEY}`)
          }}
        />

        <View className='mt-8 gap-5'>
          <CustomInput
            label='Nazwa Użytkownika'
            placeholder='Podaj nazwę użytkownika'
            value={username}
            onChangeText={setUsername}
          />
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
          <CustomInput
            label='Potwierdź Hasło'
            placeholder='Potwierdź hasło'
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>
      </View>

      <PrimaryButton title='Zarejestruj się' onPress={handleRegister} />
    </View>
  )
}

export default Register
