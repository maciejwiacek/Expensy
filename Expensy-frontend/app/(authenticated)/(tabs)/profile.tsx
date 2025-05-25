import CustomModal from '@/components/CustomModal'
import IconButton from '@/components/IconButton'
import SettingsButton from '@/components/SettingsButton'
import { Colors } from '@/constants/Colors'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Buttons = ({
	setShowLogoutModal,
}: {
	setShowLogoutModal: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	return (
		<View>
			<SettingsButton
				title='Zmień hasło'
				onPress={() => console.log('Zmień hasło')}
			/>
			<View
				style={{
					width: '100%',
					height: 1,
					backgroundColor: Colors.light300,
				}}
			/>
			<SettingsButton
				title='Edytuj Profil'
				onPress={() => console.log('Edytuj Profil')}
			/>
			<View
				style={{
					width: '100%',
					height: 1,
					backgroundColor: Colors.light300,
				}}
			/>
			<SettingsButton
				title='Prywatność i ochrona'
				onPress={() => console.log('Prywatność i ochrona')}
			/>
			<View
				style={{
					width: '100%',
					height: 1,
					backgroundColor: Colors.light300,
				}}
			/>
			<SettingsButton
				title='Powiadomienia'
				onPress={() => console.log('Powiadomienia')}
			/>
			<View
				style={{
					width: '100%',
					height: 1,
					backgroundColor: Colors.light300,
				}}
			/>
			<SettingsButton
				title='Zarządzaj subskrypcją'
				onPress={() => console.log('Zarządzaj subskrypcją')}
			/>
			<View
				style={{
					width: '100%',
					height: 1,
					backgroundColor: Colors.light300,
				}}
			/>
			<SettingsButton
				title='Wyloguj się'
				onPress={() => {
					setShowLogoutModal(true)
				}}
				color={Colors.warning300}
			/>
		</View>
	)
}

const Profile = () => {
	const { user } = useUser()
	const { signOut } = useAuth()
	const router = useRouter()
	const [showLogoutModal, setShowLogoutModal] = useState(false)
	const userName = user?.username
		? user.username.charAt(0).toUpperCase() + user.username.slice(1)
		: 'Błąd użytkownika!'

	return (
		<>
			<SafeAreaView style={styles.container}>
				<View style={styles.content}>
					<View style={styles.headerContainer}>
						<View>
							<Image
								source={{
									uri: 'https://preview.redd.it/ilia-topuria-is-clean-doesnt-waste-actions-and-always-v0-abtqyrjgi7xd1.jpg?width=1080&crop=smart&auto=webp&s=a81b0d250a843684f677a8cb6571b8221d7485b0',
								}}
								style={styles.profileImage}
								resizeMode='contain'
							/>
							<View style={styles.editButtonContainer}>
								<IconButton
									icon={'pencil'}
									onPress={() => {}}
									size={36}
								/>
							</View>
						</View>
						<Text style={styles.usernameText}>{userName}</Text>
					</View>
					<Buttons setShowLogoutModal={setShowLogoutModal} />
				</View>
			</SafeAreaView>
			<CustomModal
				shown={showLogoutModal}
				title={'Wyloguj się'}
				text={'Czy napewno chcesz się wylogować?'}
				confirmButtonText={'Wyloguj'}
				onConfirm={() => {
					signOut()
					router.replace('/(authentication)/login')
				}}
				cancelButtonText={'Anuluj'}
				onCancel={() => setShowLogoutModal(false)}
			/>
		</>
	)
}

export default Profile

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	content: {
		flex: 1,
		marginHorizontal: 24,
		justifyContent: 'space-between',
		paddingTop: 60,
	},
	headerContainer: {
		alignItems: 'center',
		gap: 20,
	},
	profileImage: {
		width: 100,
		aspectRatio: 1,
		borderRadius: 32,
	},
	usernameText: {
		fontFamily: 'Inter',
		fontWeight: '800',
		fontSize: 24,
	},
	editButtonContainer: {
		position: 'absolute',
		bottom: -10,
		right: -10,
	},
})
