import { SignOutButton } from '@/components/SignOutButton'
import { CashEntry } from '@/types/CashEntry'
import { useSession, useUser } from '@clerk/clerk-expo'
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

const Home = () => {
  const [cashEntries, setCashEntries] = useState<CashEntry[]>([])

  const { user } = useUser()
  const { session } = useSession()

  const createClerkSupabaseClient = () => {
    return createClient(
      process.env.EXPO_PUBLIC_SUPABASE_URL!,
      process.env.EXPO_PUBLIC_SUPABASE_KEY!,
      {
        async accessToken() {
          return session?.getToken() ?? null
        },
      }
    )
  }

  const client = createClerkSupabaseClient()

  useEffect(() => {
    if (!user) return

    const loadCashEntries = async () => {
      const { data, error } = await client.from('cash_entry').select()
      if (error) {
        console.error('Error loading cash entries:', error)
        return
      }
      setCashEntries(data)
    }

    loadCashEntries()
  }, [user, client])

  const createCashEntry = async () => {
    await client.from('cash_entry').insert({
      name: 'Wypłata',
      amount: 10000,
      date: new Date().toISOString(),
      type: 'income',
      category_id: 1,
    })
  }

  return (
    <View style={styles.container}>
      <Text>Hello {user?.username}</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={cashEntries}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.amount}</Text>
            <Text>{item.type}</Text>
          </View>
        )}
      />
      <Button title='Create Cash Entry' onPress={createCashEntry} />
      <SignOutButton />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
})
