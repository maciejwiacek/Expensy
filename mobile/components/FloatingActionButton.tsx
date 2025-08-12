import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import FloatingActionMenu from './FloatingActionMenu'

type FloatingActionButtonProps = {
  onPress?: () => void
}

const FloatingActionButton = ({ onPress }: FloatingActionButtonProps) => {
  const rotation = useSharedValue(0)
  const [isActive, setIsActive] = useState(false)

  const animatedIconStyle = useAnimatedStyle(() => {
    return { transform: [{ rotate: `${rotation.value}deg` }] }
  })

  const handlePress = () => {
    setIsActive(!isActive)
    rotation.value = withTiming(isActive ? 0 : 45, { duration: 200 })
  }

  return (
    <>
      <TouchableOpacity
        className='absolute bottom-6 right-6 bg-blue-500 rounded-full w-14 h-14 justify-center items-center z-50'
        onPress={handlePress}
      >
        <Animated.View style={animatedIconStyle}>
          <FontAwesome6 name='plus' size={22} color='white' />
        </Animated.View>
      </TouchableOpacity>

      <FloatingActionMenu isActive={isActive} onClose={handlePress} />
    </>
  )
}

export default FloatingActionButton
