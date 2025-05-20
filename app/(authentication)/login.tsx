import IconButton from '@/components/IconButton'
import PrimaryButton from '@/components/PrimaryButton'
import TextButton from '@/components/TextButton'
import TextInput from '@/components/TextInput'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
	Alert,
	Image,
	Keyboard,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native'

const login = () => {
	const router = useRouter()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SafeAreaView style={styles.container}>
				<View style={styles.content}>
					<Image
						source={require('@/assets/images/logo.png')}
						style={styles.logo}
						resizeMode='contain'
					/>
					<Text style={styles.headerText}>Witaj w Expensy!</Text>
					<Text style={styles.slogan}>
						Skanuj, zarządzaj, oszczędzaj z łatwością.
					</Text>
					<View style={styles.textInputContainer}>
						<TextInput
							placeholder='Podaj adres e-mail'
							label='E-mail'
							value={email}
							onChangeText={setEmail}
						/>
					</View>
					<View style={styles.textInputContainer}>
						<TextInput
							placeholder='Podaj hasło'
							label='Hasło'
							value={password}
							onChangeText={setPassword}
							secureTextEntry
						/>
					</View>
					<TextButton
						title={'Nie pamiętasz hasła?'}
						onPress={() => {
							Alert.prompt(
								'Podaj kod weryfikacyjny',
								'Wprowadź 4-cyfrowy kod z Twojego e-maila',
								[{ text: 'OK', onPress: () => {} }]
							)
						}}
					/>
					<View style={styles.loginButton}>
						<PrimaryButton title='Zaloguj się' onPress={() => {}} />
					</View>
					<View style={styles.registerButton}>
						<Text style={styles.secondaryText}>
							Nie masz konta?{' '}
						</Text>
						<TextButton
							title={'Zarejestruj się'}
							onPress={() => {
								router.replace('/(authentication)/register')
							}}
						/>
					</View>
					<View style={styles.divider}>
						<View style={styles.smallDivider} />
						<Text style={styles.dividerText}>Lub Użyj</Text>
						<View style={styles.smallDivider} />
					</View>
					<View style={styles.buttonsContainer}>
						<IconButton
							icon={'google'}
							onPress={() => {}}
							color={Colors.error300}
						/>
						<IconButton
							icon={'apple'}
							onPress={() => {}}
							color={Colors.dark500}
						/>
						<IconButton icon={'facebook'} onPress={() => {}} />
					</View>
				</View>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	)
}

export default login

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
	},
	content: {
		marginHorizontal: 24,
	},
	logo: {
		width: 63,
		height: 58,
		alignSelf: 'center',
		marginBottom: 30,
	},
	headerText: {
		fontSize: 24,
		fontFamily: 'Inter',
		fontWeight: '800',
		marginBottom: 5,
		textAlign: 'center',
	},
	slogan: {
		fontSize: 16,
		fontFamily: 'Inter',
		textAlign: 'center',
		marginBottom: 45,
		color: Colors.dark100,
	},
	textInputContainer: {
		marginBottom: 18,
	},
	loginButton: {
		marginVertical: 18,
	},
	secondaryText: {
		fontFamily: 'Inter',
		fontSize: 14,
		color: Colors.dark100,
	},
	registerButton: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'baseline',
	},
	divider: {
		flexDirection: 'row',
		marginTop: 20,
		marginBottom: 20,
	},
	smallDivider: {
		flex: 1,
		height: 1,
		backgroundColor: Colors.light400,
		alignSelf: 'center',
	},
	dividerText: {
		fontFamily: 'Inter',
		fontSize: 14,
		marginHorizontal: 15,
		color: Colors.dark100,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 24,
		marginTop: 24,
	},
})
