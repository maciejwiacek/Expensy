import CustomInput from '@/components/CustomInput'
import PrimaryButton from '@/components/PrimaryButton'
import { useAuth } from '@/context/useAuth'
import { Link } from 'expo-router'
import { useState } from 'react'
import { Text, View } from 'react-native'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { register } = useAuth()

  const handleRegister = async () => {
    try {
      await register(name, email, password, confirmPassword)
    } catch (error) {
      console.error('Registration error:', error)
      alert('Rejestracja nie powiodła się. Spróbuj ponownie.')
    }
  }

  return (
    <View className='flex-1 justify-between my-16 mx-4'>
      <View>
        <Text className='text-2xl font-bold mt-8'>Zarejestruj się!</Text>
        <Text className='text-neutral-500'>
          Załóż konto, aby dołączyć do Expensy!
        </Text>

        <View className='mt-8 gap-5'>
          <CustomInput
            label='Imię'
            placeholder='Podaj swoje imię'
            value={name}
            onChangeText={setName}
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

      <View>
        <PrimaryButton title='Zarejestruj się' onPress={handleRegister} />
        <View className='flex-row justify-center mt-4'>
          <Text>Masz już konto? </Text>
          <Link href='/login' className='text-blue-500 font-semibold'>
            Zaloguj się
          </Link>
        </View>
      </View>
    </View>
  )
}

export default Register
