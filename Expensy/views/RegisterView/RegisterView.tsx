import { useState } from 'react'
import {
	View,
	TouchableOpacity,
	SafeAreaView,
	Alert,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
} from 'react-native'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { router } from 'expo-router'
import StyledText from '@/components/StyledText/StyledText'
import { colors } from '@/constants/colors'
import TextField from '@/components/TextField/TextField'
import styles from './styles'
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton'
import TextButton from '@/components/TextButton/TextButton'
import SecondaryButton from '@/components/SecondaryButton/SecondaryButton'
import { FacebookLogo, GoogleLogo } from 'phosphor-react-native'
import TextDivider from '@/components/TextDivider/TextDivider'

export default function RegisterView() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const handleRegister = async () => {
		setError('')
		if (password !== confirmPassword) {
			Alert.alert('Błąd', 'Hasła nie pasują do siebie')
			return
		}
		setLoading(true)
		try {
			const userCredentials = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)
			const user = userCredentials.user

			await updateProfile(user, {
				displayName: name,
			})

			router.replace('/(tabs)/home')
		} catch (err: any) {
			setError(err.message)
			Alert.alert('Błąd rejestracji', err.message)
		} finally {
			setLoading(false)
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<KeyboardAvoidingView
					style={{ flex: 1 }}
					behavior='padding'
					keyboardVerticalOffset={100}
				>
					<View style={styles.content}>
						<View>
							<View style={styles.header}>
								<StyledText variant='h1' style={styles.title}>
									Zarejestruj się
								</StyledText>
								<StyledText
									variant='bodyS'
									style={styles.slang}
								>
									Dołącz do Expensy i przekonaj się, jak
									wygodne może być zarządzanie pieniędzmi
								</StyledText>
							</View>
						</View>
						<View>
							<View style={styles.topButtonsContainer}>
								<SecondaryButton
									title={'Facebook'}
									style={{ marginRight: 5 }}
									IconComponent={FacebookLogo}
									iconColor={colors.highlight500}
								/>
								<SecondaryButton
									title={'Google'}
									IconComponent={GoogleLogo}
									iconColor={colors.error300}
								/>
							</View>
							<TextDivider title={'Lub'} />
							<TextField
								title={'Imię i nazwisko'}
								value={name}
								onChangeText={setName}
								style={styles.textField}
								autoCapitalize='words'
							/>
							<TextField
								title={'E-mail'}
								value={email}
								onChangeText={setEmail}
								style={styles.textField}
								keyboardType='email-address'
								autoCapitalize='none'
							/>
							<TextField
								title={'Hasło'}
								value={password}
								onChangeText={setPassword}
								style={styles.textField}
								secureTextEntry={true}
								autoCapitalize='none'
							/>
							<TextField
								title={'Potwierdź hasło'}
								value={confirmPassword}
								onChangeText={setConfirmPassword}
								style={styles.textField}
								secureTextEntry={true}
								autoCapitalize='none'
							/>
						</View>
						<View style={styles.bottomPart}>
							<StyledText
								variant='bodyXS'
								style={styles.privacyPolicyText}
							>
								Wyrażam zgodę na przetwarzanie moich danych
								osobowych przez Expensy zgodnie z Polityką
								Prywatności
							</StyledText>
							<PrimaryButton
								title={'Zarejestruj się'}
								onPress={handleRegister}
							/>
							<TextButton
								title={'Masz już konto? Zaloguj się'}
								onPress={() => router.replace('/login')}
								style={styles.loginButton}
							/>
						</View>
					</View>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	)
}
