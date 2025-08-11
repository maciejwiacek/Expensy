import { CommonActions } from '@react-navigation/native'
import { Stack, useNavigation } from 'expo-router'
import React, { useEffect, useRef } from 'react'

const Layout = () => {
  const navigation = useNavigation()
  // Use a ref to keep data over renders and avoid rerendering
  const isFirstRender = useRef(true)

  useEffect(() => {
    // Add a listener to reset the navigation stack when the screen is focused
    const unsubscribe = navigation.addListener('focus', () => {
      // Check if this is the first render to avoid resetting on initial load
      if (isFirstRender.current) {
        isFirstRender.current = false
        return
      }

      // Send a reset action to the navigation stack using dispatch
      navigation.dispatch(
        // Replace the entire navigation state with a new one
        CommonActions.reset({
          // Defines which screen to show first
          index: 0,
          // Defines the routes in the new stack
          routes: [{ name: 'home' }],
        })
      )
    })

    return unsubscribe
  }, [navigation])

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen
        name='addTransaction'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='[id]'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}

export default Layout
