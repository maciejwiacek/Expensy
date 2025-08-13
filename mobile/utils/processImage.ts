import { Alert } from 'react-native'

export const processImage = async (uri: string) => {
  const localUri = uri
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
    const response = await fetch('http://localhost:3000/api/receipts/', {
      method: 'POST',
      body: formData,
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)

    Alert.alert(
      'Error',
      `Failed to upload the photo. Please try again. ${message}`
    )
  }
}
