import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { router } from 'expo-router'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledText from '@/components/StyledText/StyledText'
import TextField from '@/components/TextField/TextField'
import {
	Keyboard,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	View,
} from 'react-native'
import TextButton from '@/components/TextButton/TextButton'
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton/SecondaryButton'
import { FacebookLogo, GoogleLogo } from 'phosphor-react-native'
import { colors } from '@/constants/colors'
import TextDivider from '@/components/TextDivider/TextDivider'

export default function LoginView() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const handleLogin = async () => {
		setError('')
		setLoading(true)
		try {
			await signInWithEmailAndPassword(auth, email, password)
			router.replace('/(tabs)/home')
		} catch (err: any) {
			setError(err.message)
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
							<StyledText variant='h1' style={styles.title}>
								Zaloguj się!
							</StyledText>
							<StyledText variant='bodyS' style={styles.slang}>
								Znowu Ty? Świetnie. Budżet czeka.
							</StyledText>
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
								title='E-mail'
								value={email}
								onChangeText={setEmail}
								autoCapitalize='none'
								keyboardType='email-address'
								style={[styles.textField, { marginTop: 20 }]}
							/>
							<TextField
								title='Hasło'
								value={password}
								onChangeText={setPassword}
								autoCapitalize='none'
								secureTextEntry={true}
								style={styles.textField}
							/>
							<TextButton
								title={'Zapomniałeś hasła?'}
								onPress={() => {}}
								style={styles.forgotPassword}
							/>
						</View>
						<View>
							<PrimaryButton
								title={'Zaloguj się'}
								onPress={handleLogin}
							/>
							<TextButton
								title={'Nie masz konta? Zarejestruj się'}
								onPress={() => router.push('/register')}
								style={styles.redirectButton}
							/>
						</View>
					</View>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	)
}
