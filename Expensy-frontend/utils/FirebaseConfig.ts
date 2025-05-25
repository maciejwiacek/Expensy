import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const API_KEY = process.env.EXPO_FIREBASE_API_KEY
const AUTH_DOMAIN = process.env.EXPO_FIREBASE_AUTH_DOMAIN
const PROJECT_ID = process.env.EXPO_FIREBASE_PROJECT_ID
const STORAGE_BUCKET = process.env.EXPO_FIREBASE_STORAGE_BUCKET
const MESSAGING_SENDER_ID = process.env.EXPO_FIREBASE_MESSAGING_SENDER_ID
const APP_ID = process.env.EXPO_FIREBASE_APP_ID

const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MESSAGING_SENDER_ID,
	appId: APP_ID,
}

const app = initializeApp(firebaseConfig)
export const FIRESTORE_DB = getFirestore(app)
