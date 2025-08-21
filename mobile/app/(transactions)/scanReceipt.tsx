import { View, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Heading from '@/components/Heading'
import { CameraView, useCameraPermissions } from 'expo-camera'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker'
import { processImage } from '@/utils/processImage'
import { useCreateBudgetItem } from '@/firebase/transactions/useBudgetItems'
import { router } from 'expo-router'
import { useReceiptStore } from '@/stores/receiptStore'

const ScanReceipt = () => {
  const [permission, requestPermission] = useCameraPermissions()
  const [flashMode, setFlashMode] = useState(false)
  const cameraRef = useRef<CameraView>(null)
  const budgetItemMutation = useCreateBudgetItem()
  const receipt = useReceiptStore((state) => state.currentReceipt)
  const setCurrentReceipt = useReceiptStore((state) => state.setCurrentReceipt)

  useEffect(() => {
    requestPermission()
  }, [])

  const handleTakePicture = async () => {
    if (!cameraRef.current) return

    try {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.5,
      })

      const data = await processImage(photo.uri)
      const budgetItem = { ...data, type: 'receipt' }
      setCurrentReceipt(budgetItem)
      router.push('/(transactions)/verifyReceipt')
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      Alert.alert(
        'Error',
        `Failed to take picture. Please try again. ${message}`
      )
    }
  }

  const handlePickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
      })

      if (result.canceled) return

      const data = await processImage(result.assets[0].uri)
      const budgetItem = { ...data, type: 'receipt' }
      setCurrentReceipt(budgetItem)
      router.push('/(transactions)/verifyReceipt')
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      Alert.alert(
        'Error',
        `Failed to select photo. Please try again. ${message}`
      )
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
        <TouchableOpacity onPress={handlePickImage}>
          <FontAwesome6 name='photo-film' size={40} color='#3b82f6' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ScanReceipt
