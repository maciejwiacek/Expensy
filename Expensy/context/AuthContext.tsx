import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebaseConfig'
import { onAuthStateChanged, User } from 'firebase/auth'
import { router } from 'expo-router'

type AuthContextType = {
	user: User | null
	loading: boolean
}

const AuthContext = createContext<AuthContextType>({
	user: null,
	loading: true,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user)
			setLoading(false)
			if (user) {
				router.replace('/(tabs)/home')
			} else {
				router.replace('/(auth)/login')
			}
		})

		return unsubscribe
	}, [])

	return (
		<AuthContext.Provider value={{ user, loading }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
