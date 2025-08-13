import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Heading from '@/components/Heading'
import { CameraView, useCameraPermissions } from 'expo-camera'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Ionicons from '@expo/vector-icons/Ionicons'

const ScanReceipt = () => {
  const [permission, requestPermission] = useCameraPermissions()
  const [flashMode, setFlashMode] = useState(false)
  const cameraRef = useRef<CameraView>(null)

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.5,
      })

      const localUri = photo.uri
      const filename = localUri.split('/').pop() || 'photo.jpg'
      const match = /\.(\w+)$/.exec(filename)
      const type = match ? `image/${match[1]}` : 'image'

      const formData = new FormData()
      formData.append('file', {
        uri: localUri,
        name: filename,
        type: type,
      } as any)

      try {
        const response = await fetch('http://10.18.200.51:3000/api/receipts/', {
          method: 'POST',
          body: formData,
        })
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log('Upload successful:', data)
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error)

        Alert.alert(
          'Error',
          `Failed to upload the photo. Please try again. ${message}`
        )
      }
    }
  }

  if (!permission) {
    // Camera permissions are still loading
    return <View />
  }

  if (!permission.granted) {
    // Camera permissions are not granted
    return <View />
  }

  return (
    <View className='flex-1 bg-white pt-20 px-4'>
      <Heading title='Skanuj Paragon' onPress={() => {}} />
      <View className='flex-1 overflow-hidden rounded-3xl my-10'>
        <CameraView
          ref={cameraRef}
          style={{ flex: 1 }}
          facing={'back'}
          mode='picture'
          flash={flashMode ? 'on' : 'off'}
        />
      </View>
      <View className='mb-10 flex-row justify-between items-center mx-10'>
        <TouchableOpacity onPress={() => setFlashMode(!flashMode)}>
          <Ionicons
            name={flashMode ? 'flash' : 'flash-off'}
            size={40}
            color='#3b82f6'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTakePicture}>
          <FontAwesome6 name='camera' size={60} color='#3b82f6' />
        </TouchableOpacity>
        <FontAwesome6 name='photo-film' size={40} color='#3b82f6' />
      </View>
    </View>
  )
}

export default ScanReceipt
