import { Link } from 'expo-router'
import { SafeAreaView, Text } from 'react-native'

const Register = () => {
  return (
    <SafeAreaView>
      <Text>Register</Text>
      <Link href='/(auth)/login' replace>
        Login
      </Link>
    </SafeAreaView>
  )
}

export default Register
