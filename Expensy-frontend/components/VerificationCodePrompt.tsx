import { Colors } from '@/constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import {
	Keyboard,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native'
import {
	CodeField,
	useBlurOnFulfill,
	useClearByFocusCell,
} from 'react-native-confirmation-code-field'
import PrimaryButton from './PrimaryButton'
import TextButton from './TextButton'

const VerificationCodePrompt = ({
	shown,
	code,
	setCode,
	onCancel,
	onConfirm,
	onResend,
	isError,
	errorMessage,
}: {
	shown: boolean
	code: string
	setCode: (val: string) => void
	onCancel: () => void
	onConfirm: () => void
	onResend: () => void
	isError: boolean
	errorMessage?: string
}) => {
	const ref = useBlurOnFulfill({ value: code, cellCount: 6 })
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value: code,
		setValue: setCode,
	})

	return (
		<Modal
			visible={shown}
			animationType='fade'
			transparent
			statusBarTranslucent
		>
			<TouchableWithoutFeedback onPress={() => onCancel()}>
				<View style={styles.overlay}>
					<TouchableWithoutFeedback
						onPress={() => Keyboard.dismiss()}
					>
						<View style={styles.container}>
							<View>
								<Text style={styles.title}>
									Podaj kod weryfikacyjny!
								</Text>
								<Text style={styles.subtitle}>
									Na Twój adres e-mail został wysłany
									6-cyfrowy kod weryfikacyjny do rejestracji.
								</Text>
							</View>
							<View style={{ gap: 10 }}>
								<CodeField
									ref={ref}
									{...props}
									value={code}
									onChangeText={setCode}
									cellCount={6}
									keyboardType={'number-pad'}
									textContentType={'oneTimeCode'}
									rootStyle={styles.codeFieldRoot}
									renderCell={({
										index,
										symbol,
										isFocused,
									}) => (
										<Text
											key={index}
											style={[
												styles.cell,
												isError && {
													borderColor:
														Colors.error300,
												},
												isFocused && {
													borderColor:
														Colors.highlight500,
												},
											]}
											onLayout={getCellOnLayoutHandler(
												index
											)}
										>
											{symbol}
										</Text>
									)}
								/>
								{isError && (
									<Text style={styles.errorMessage}>
										{errorMessage}
									</Text>
								)}
							</View>
							<View style={styles.button}>
								<View style={{ alignItems: 'center' }}>
									<TextButton
										title='Nie otrzymałeś kodu?'
										onPress={onResend}
									/>
								</View>
								<PrimaryButton
									title='Zweryfikuj Konto'
									onPress={onConfirm}
								/>
							</View>
							<TouchableOpacity
								onPress={onCancel}
								style={styles.cancelButton}
							>
								<FontAwesome
									name='close'
									size={18}
									color={Colors.dark100}
								/>
							</TouchableOpacity>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	)
}

export default VerificationCodePrompt

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		width: '85%',
		backgroundColor: 'white',
		borderRadius: 12,
		padding: 24,
		alignItems: 'center',
		gap: 25,
	},
	title: {
		fontFamily: 'Inter',
		fontWeight: '800',
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 5,
	},
	subtitle: {
		fontFamily: 'Inter',
		fontSize: 14,
		textAlign: 'center',
		color: Colors.dark100,
	},
	codeFieldRoot: {
		gap: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cell: {
		fontFamily: 'Inter',
		fontSize: 24,
		width: 40,
		height: 50,
		borderWidth: 1.5,
		borderColor: Colors.light500,
		borderRadius: 10,
		textAlign: 'center',
		lineHeight: 53,
	},
	button: {
		width: '100%',
		gap: 10,
	},
	errorMessage: {
		fontFamily: 'Inter',
		color: Colors.error300,
		fontSize: 14,
		textAlign: 'center',
	},
	cancelButton: {
		position: 'absolute',
		top: 20,
		right: 20,
	},
})
