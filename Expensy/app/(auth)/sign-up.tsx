import FormInput from '@/components/FormInput'
import PrimaryButton from '@/components/PrimaryButton'
import { COLORS } from '@/constants/colors'
import registerSchema from '@/schemas/registerSchema'
import { globalStyles } from '@/utils/globalStyles'
import { useSignUp } from '@clerk/clerk-expo'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Keyboard,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

interface SignUpFormValues {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const SignUpScreen = () => {
  const { isLoaded, signUp, setActive } = useSignUp()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: yupResolver(registerSchema),
  })

  const [pendingVerification, setPendingVerification] = useState(false)
  const [code, setCode] = useState('')

  // Handle submission of sign-up form
  const onSignUpPress = async (data: SignUpFormValues) => {
    if (!isLoaded) return

    try {
      if (data.password !== data.confirmPassword) {
        throw new Error('Passwords do not match')
      }

      await signUp.create({
        username: data.name,
        emailAddress: data.email,
        password: data.password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      setPendingVerification(true)
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (signUpAttempt.status === 'complete') {
        await setActive({ session: signUpAttempt.createdSessionId })
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2))
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <>
      <SafeAreaView style={globalStyles.safeArea}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={[globalStyles.container, styles.container]}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>Zarejestruj się</Text>
              <Text style={styles.headerSubtitle}>
                Załóż konto, aby dołączyć do Expensy!
              </Text>
            </View>
            <View style={{ width: '100%', gap: 20 }}>
              <FormInput<SignUpFormValues>
                name='name'
                control={control}
                errors={errors}
                label='Imię'
                placeholder='Wprowadź swoje imię'
              />
              <FormInput<SignUpFormValues>
                name='email'
                control={control}
                errors={errors}
                label='Email'
                placeholder='Wprowadź swój email'
              />
              <FormInput<SignUpFormValues>
                name='password'
                control={control}
                errors={errors}
                label='Hasło'
                placeholder='Wprowadź swoje hasło'
                inputProps={{ secureTextEntry: true }}
              />
              <FormInput<SignUpFormValues>
                name='confirmPassword'
                control={control}
                errors={errors}
                label='Potwierdź hasło'
                placeholder='Potwierdź swoje hasło'
                inputProps={{ secureTextEntry: true }}
              />
            </View>
            <PrimaryButton
              title='Zarejestruj się'
              onPress={handleSubmit(onSignUpPress)}
            />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Modal visible={pendingVerification} transparent={true}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={{ marginBottom: 10 }}>
                Verification code from your e-mail
              </Text>
              <TextInput
                value={code}
                placeholder='Enter your verification code'
                onChangeText={setCode}
                style={styles.input}
                placeholderTextColor={COLORS.gray}
                keyboardType='number-pad'
              />
              <PrimaryButton title='Verify' onPress={onVerifyPress} />
            </View>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    </>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  headerContainer: {
    gap: 6,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: '800',
  },
  headerSubtitle: {
    fontFamily: 'Inter',
    color: COLORS.gray,
  },
  // MODAL
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 18,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    height: 50,
  },
})
