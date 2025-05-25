import { Colors } from '@/constants/Colors'
import React from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import OutlinedButton from './OutlinedButton'
import PrimaryButton from './PrimaryButton'

const CustomModal = ({
	shown,
	onCancel,
	onConfirm,
	title,
	text,
	cancelButtonText,
	confirmButtonText,
}: {
	shown: boolean
	onCancel: () => void
	onConfirm: () => void
	title: string
	text: string
	cancelButtonText: string
	confirmButtonText: string
}) => {
	return (
		<Modal
			visible={shown}
			animationType='fade'
			transparent
			statusBarTranslucent
		>
			<View style={styles.overlay}>
				<View style={styles.container}>
					<View style={styles.textContainer}>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.text}>{text}</Text>
					</View>
					<View style={styles.buttonsContainer}>
						<View style={{ flex: 1 }}>
							<OutlinedButton
								title={cancelButtonText}
								onPress={onCancel}
							/>
						</View>
						<View style={{ flex: 1 }}>
							<PrimaryButton
								title={confirmButtonText}
								onPress={onConfirm}
							/>
						</View>
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default CustomModal

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
	textContainer: {
		alignItems: 'center',
		gap: 8,
	},
	title: {
		fontFamily: 'Inter',
		fontSize: 20,
		fontWeight: '800',
	},
	text: {
		fontFamily: 'Inter',
		fontSize: 14,
		color: Colors.dark100,
	},
	buttonsContainer: {
		flexDirection: 'row',
		width: '100%',
		gap: 8,
		justifyContent: 'center',
	},
})
