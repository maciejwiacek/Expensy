import CustomCheckbox from '@/components/CustomCheckbox'
import PrimaryButton from '@/components/PrimaryButton'
import TextButton from '@/components/TextButton'
import TextInput from '@/components/TextInput'
import VerificationCodePrompt from '@/components/VerificationCodePrompt'
import { Colors } from '@/constants/Colors'
import { useSignUp } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
	Keyboard,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native'

const Register = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [privacyPolicy, setPrivacyPolicy] = useState(false)
	const [verificationCode, setVerificationCode] = useState('')
	const [showCodePrompt, setShowCodePrompt] = useState(false)

	const router = useRouter()

	const { isLoaded, signUp, setActive } = useSignUp()

	const onSignUpPress = async () => {
		if (!isLoaded) return

		try {
			await signUp.create({
				emailAddress: email,
				password: password,
				username: name,
			})

			await signUp.prepareEmailAddressVerification({
				strategy: 'email_code',
			})
			setShowCodePrompt(true)
		} catch (err) {
			console.error(JSON.stringify(err, null, 2))
		}
	}

	const onVerifyPress = async () => {
		if (!isLoaded) return

		try {
			const signUpAttempt = await signUp.attemptEmailAddressVerification({
				code: verificationCode,
			})

			if (signUpAttempt.status === 'complete') {
				await setActive({ session: signUpAttempt.createdSessionId })
				router.replace('/(authenticated)/(tabs)/home')
			} else {
				console.log('Verification failed')
			}
		} catch (err) {
			console.error(JSON.stringify(err, null, 2))
		}
	}

	return (
		<>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<SafeAreaView style={styles.container}>
					<View style={styles.content}>
						<View>
							<Text style={styles.header}>Zarejestruj się!</Text>
							<Text style={styles.slogan}>
								Załóż konto, aby dołączyć do Expensy!
							</Text>
							<View style={styles.textInputsContainer}>
								<TextInput
									placeholder='Podaj nazwę użytkownika'
									label='Nazwa użytkownika'
									value={name}
									onChangeText={setName}
								/>
								<TextInput
									placeholder='Podaj adres e-mail'
									label='E-mail'
									value={email}
									onChangeText={setEmail}
								/>
								<TextInput
									placeholder='Podaj hasło'
									label='Hasło'
									value={password}
									onChangeText={setPassword}
									secureTextEntry
								/>
								<TextInput
									placeholder='Potwierdź hasło'
									label='Potwierdź hasło'
									value={confirmPassword}
									onChangeText={setConfirmPassword}
									secureTextEntry
								/>
								<View style={styles.privacyPolicyContainer}>
									<CustomCheckbox
										checked={privacyPolicy}
										setChecked={setPrivacyPolicy}
									/>
									<Text style={styles.privacyPolicy}>
										Wyrażam zgodę na przetwarzanie moich
										danych osobowych przez Expensy zgodnie z{' '}
										<TextButton
											title='Polityką Prywatności.'
											onPress={() => {
												console.log('Privacy Policy')
											}}
											size={12}
										/>
									</Text>
								</View>
							</View>
						</View>
						<View>
							<PrimaryButton
								title='Zarejestruj się'
								onPress={onSignUpPress}
							/>
							<Text
								style={{
									textAlign: 'center',
									fontFamily: 'Inter',
									fontSize: 14,
									color: Colors.dark100,
									marginTop: 18,
								}}
							>
								Masz już konto?{' '}
								<TextButton
									title='Zaloguj się'
									onPress={() => {
										router.replace(
											'/(authentication)/login'
										)
									}}
								/>
							</Text>
						</View>
					</View>
				</SafeAreaView>
			</TouchableWithoutFeedback>
			<VerificationCodePrompt
				shown={showCodePrompt}
				onCancel={() => {
					setVerificationCode('')
					setShowCodePrompt(false)
				}}
				onConfirm={onVerifyPress}
				code={verificationCode}
				setCode={setVerificationCode}
				isError={false}
				onResend={() => {}}
				errorMessage={'Niepoprawny kod weryfikacyjny!'}
			/>
		</>
	)
}

export default Register

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	content: {
		flex: 1,
		paddingVertical: 30,
		marginHorizontal: 24,
		justifyContent: 'space-between',
	},
	header: {
		fontFamily: 'Inter',
		color: 'black',
		fontSize: 20,
		fontWeight: '800',
		marginBottom: 5,
	},
	slogan: {
		fontFamily: 'Inter',
		color: Colors.dark100,
		fontSize: 14,
		marginBottom: 20,
	},
	textInputsContainer: {
		gap: 18,
		marginBottom: 18,
	},
	privacyPolicyContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	privacyPolicy: {
		fontSize: 12,
		fontFamily: 'Inter',
		color: Colors.dark100,
		width: '90%',
	},
})
