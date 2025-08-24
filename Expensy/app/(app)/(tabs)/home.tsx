import FloatingActionButton from '@/components/FloatingActionButton'
import { COLORS } from '@/constants/colors'
import { globalStyles } from '@/utils/globalStyles'
import { Link, router } from 'expo-router'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const Home = () => {
  return (
    <SafeAreaView style={[globalStyles.safeArea, { position: 'relative' }]}>
      <FloatingActionButton
        onPress={() => router.push('/(app)/(transactions)/cash/create')}
      />
      <View style={globalStyles.container}>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Twoje saldo</Text>
          <Text style={styles.balanceAmount}>0.00 PLN</Text>
        </View>
        <View style={styles.transactions}>
          <View style={styles.transactionsHeader}>
            <Text style={styles.transactionsTitle}>Ostatnie transakcje</Text>
            <Link href='/transactions' asChild>
              <TouchableOpacity>
                <Text style={styles.transactionsSeeMore}>Zobacz więcej</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  balanceContainer: {
    marginTop: 12,
    gap: 4,
  },
  balanceTitle: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
  },
  balanceAmount: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '700',
  },
  transactions: {
    marginTop: 12,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  transactionsTitle: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
  },
  transactionsSeeMore: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.primary,
  },
})
