import FormInput from '@/components/FormInput'
import PrimaryButton from '@/components/PrimaryButton'
import { COLORS } from '@/constants/colors'
import loginSchema from '@/schemas/loginSchema'
import { useSignIn } from '@clerk/clerk-expo'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'expo-router'
import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

interface LoginFormValues {
  email: string
  password: string
}

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  })

  const onSignInPress = async (data: LoginFormValues) => {
    if (!isLoaded) return
    try {
      const signInAttempt = await signIn.create({
        identifier: data.email,
        password: data.password,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('@/assets/images/expensy-logo.png')}
            style={styles.logo}
            width={63}
            height={58}
            resizeMode='contain'
          />
          <Text style={styles.headerText}>Witaj w Expensy!</Text>
        </View>
        <View style={{ width: '100%', gap: 20 }}>
          <FormInput<LoginFormValues>
            name='email'
            control={control}
            errors={errors}
            label='E-mail'
            placeholder='Wprowadź adres e-mail'
          />
          <FormInput<LoginFormValues>
            name='password'
            control={control}
            errors={errors}
            label='Hasło'
            placeholder='Wprowadź hasło'
            inputProps={{ secureTextEntry: true }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title='Zaloguj się'
            onPress={handleSubmit(onSignInPress)}
          />
          <Text style={styles.text}>
            Nie masz konta?{' '}
            <Link style={styles.link} href='/(auth)/sign-up' replace>
              Zarejestruj się
            </Link>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginTop: 60,
  },
  logo: {
    width: 63,
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '800',
  },
  buttonContainer: {
    width: '100%',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Inter',
  },
  link: {
    color: COLORS.primary,
  },
})
