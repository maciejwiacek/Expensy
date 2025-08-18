import FormInput from '@/components/FormInput'
import PrimaryButton from '@/components/PrimaryButton'
import { useAuth } from '@/context/useAuth'
import registerSchema from '@/schemas/registerSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'expo-router'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

type RegisterFormValues = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const Register = () => {
  const { register } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({ resolver: yupResolver(registerSchema) })

  const handleRegister = async (data: RegisterFormValues) => {
    try {
      await register(data.name, data.email, data.password, data.confirmPassword)
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
          <FormInput<RegisterFormValues>
            name='name'
            control={control}
            errors={errors}
            label='Imię'
            placeholder='Podaj swoje imię'
          />
          <FormInput<RegisterFormValues>
            name='email'
            control={control}
            errors={errors}
            label='E-mail'
            placeholder='Podaj adres e-mail'
          />
          <FormInput<RegisterFormValues>
            name='password'
            control={control}
            errors={errors}
            label='Hasło'
            placeholder='Podaj hasło'
            inputProps={{ secureTextEntry: true, textContentType: 'none' }}
          />
          <FormInput<RegisterFormValues>
            name='confirmPassword'
            control={control}
            errors={errors}
            label='Potwierdź Hasło'
            placeholder='Potwierdź hasło'
            inputProps={{ secureTextEntry: true, textContentType: 'none' }}
          />
        </View>
      </View>

      <View>
        <PrimaryButton
          title='Zarejestruj się'
          onPress={handleSubmit(handleRegister)}
        />
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
