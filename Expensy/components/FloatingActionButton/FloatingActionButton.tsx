import { View, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { Plus, Scan } from 'phosphor-react-native'
import { colors } from '@/constants/colors'
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'
import styles from './styles'
import StyledText from '../StyledText/StyledText'

const FloatingActionButton = () => {
	const [active, setActive] = useState(false)
	const buttonRotation = useSharedValue(0)
	const lowerButtonOpacity = useSharedValue(0)
	const lowerButtonScale = useSharedValue(0)
	const lowerButtonPosition = useSharedValue(0)
	const upperButtonOpacity = useSharedValue(0)
	const upperButtonScale = useSharedValue(0)
	const upperButtonPosition = useSharedValue(0)

	const handlePress = () => {
		setActive(!active)
		buttonRotation.value = withTiming(active ? 0 : 45)
		lowerButtonOpacity.value = withTiming(active ? 0 : 1)
		lowerButtonPosition.value = withTiming(active ? 10 : 70)
		lowerButtonScale.value = withTiming(active ? 0 : 1)
		upperButtonOpacity.value = withTiming(active ? 0 : 1)
		upperButtonPosition.value = withTiming(active ? 10 : 130)
		upperButtonScale.value = withTiming(active ? 0 : 1)
	}

	const primaryButtonStyle = useAnimatedStyle(() => {
		return {
			transform: [{ rotateZ: `${buttonRotation.value}deg` }],
		}
	})

	const lowerButtonStyle = useAnimatedStyle<ViewStyle>(() => {
		return {
			opacity: lowerButtonOpacity.value,
			bottom: lowerButtonPosition.value,
			transform: [
				{ translateX: 50 },
				{ scale: lowerButtonScale.value },
				{ translateX: -50 },
			] as ViewStyle['transform'],
		}
	})

	const upperButtonStyle = useAnimatedStyle<ViewStyle>(() => {
		return {
			opacity: upperButtonOpacity.value,
			bottom: upperButtonPosition.value,
			transform: [
				{ translateX: 50 },
				{ scale: upperButtonScale.value },
				{ translateX: -50 },
			] as ViewStyle['transform'],
		}
	})

	return (
		<>
			<Animated.View style={[styles.container, primaryButtonStyle]}>
				<TouchableOpacity
					style={styles.primaryButton}
					onPress={handlePress}
				>
					<Plus size={24} color={'white'} weight='bold' />
				</TouchableOpacity>
			</Animated.View>
			<Animated.View
				style={[styles.wideButtonContainer, lowerButtonStyle]}
			>
				<TouchableOpacity style={styles.lowerButton}>
					<Scan color='white' size={24} weight='bold' />
					<StyledText style={styles.buttonText} variant='actionM'>
						Skanuj Paragon
					</StyledText>
				</TouchableOpacity>
			</Animated.View>
			<Animated.View
				style={[styles.wideButtonContainer, upperButtonStyle]}
			>
				<TouchableOpacity style={styles.lowerButton}>
					<Scan color='white' size={24} weight='bold' />
					<StyledText style={styles.buttonText} variant='actionM'>
						Dodaj Transakcję
					</StyledText>
				</TouchableOpacity>
			</Animated.View>
		</>
	)
}

export default FloatingActionButton
