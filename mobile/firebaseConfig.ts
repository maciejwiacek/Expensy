import AsyncStorage from '@react-native-async-storage/async-storage'
import { initializeApp } from 'firebase/app'
import { getReactNativePersistence, initializeAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const apiKey = process.env.EXPO_PUBLIC_FIREBASE_API_KEY
const authDomain = process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN
const projectId = process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID
const storageBucket = process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET
const messagingSenderId = process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
const appId = process.env.EXPO_PUBLIC_FIREBASE_APP_ID

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
}

const app = initializeApp(firebaseConfig)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})
export const db = getFirestore(app)
