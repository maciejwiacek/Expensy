import NavBar from '@/components/NavBar'
import { Colors } from '@/constants/Colors'
import { useIsFocused } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import { useRouter } from 'expo-router'
import {
	Camera as CameraIcon,
	CaretLeft,
	Image,
	Lightning,
	LightningSlash,
} from 'phosphor-react-native'
import React, { useRef, useState } from 'react'
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import {
	Camera,
	useCameraDevice,
	useCameraPermission,
} from 'react-native-vision-camera'

const ScanReceipt = () => {
	const device = useCameraDevice('back')
	const { hasPermission } = useCameraPermission()
	const isFocused = useIsFocused()
	const router = useRouter()
	const camera = useRef<Camera>(null)
	const [isFlashOn, setIsFlashOn] = useState(false)

	if (!hasPermission) return <Text>Brak uprawnień do kamery</Text>
	if (device == null) return <Text>Brak dostępnych urządzeń kamery</Text>

	return (
		<SafeAreaView style={styles.container}>
			<NavBar
				title='Skanuj Paragon'
				leftButton={{
					icon: (
						<CaretLeft
							size={20}
							color={Colors.highlight500}
							weight={'bold'}
						/>
					),
					onPress: () => {
						router.back()
					},
				}}
			/>
			<View style={styles.content}>
				<View style={styles.cameraContainer}>
					<Camera
						ref={camera}
						style={StyleSheet.absoluteFillObject}
						device={device}
						isActive={isFocused}
						photo={true}
						photoQualityBalance='speed'
					/>
				</View>
				<View style={styles.buttonsContainer}>
					<TouchableOpacity onPress={() => setIsFlashOn(!isFlashOn)}>
						{isFlashOn ? (
							<Lightning
								size={40}
								color={Colors.highlight500}
								weight='fill'
							/>
						) : (
							<LightningSlash
								size={40}
								color={Colors.highlight500}
								weight='fill'
							/>
						)}
					</TouchableOpacity>
					<TouchableOpacity
						onPress={async () => {
							const photo = await camera.current?.takePhoto({
								flash: isFlashOn ? 'on' : 'off',
							})
							const result = await fetch(`file://${photo?.path}`)
							const data = await result.blob()
							console.log('Photo taken:', data)
						}}
					>
						<CameraIcon
							size={70}
							color={Colors.highlight500}
							weight='fill'
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={async () => {
							const result =
								await ImagePicker.launchImageLibraryAsync({
									mediaTypes: 'images',
									allowsEditing: false,
									quality: 1,
									selectionLimit: 1,
								})

							if (!result.canceled) {
								console.log(
									'Image selected:',
									result.assets[0].uri
								)
							}
						}}
					>
						<Image
							size={40}
							color={Colors.highlight500}
							weight='fill'
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default ScanReceipt

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	content: {
		marginHorizontal: 24,
		flex: 1,
	},
	cameraContainer: {
		borderRadius: 30,
		height: 580,
		overflow: 'hidden',
		backgroundColor: Colors.light100,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginTop: 36,
	},
})
