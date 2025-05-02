import { Tabs } from 'expo-router'
import { ChartBar, House, User, Wallet } from 'phosphor-react-native'
import TabItem from '@/components/TabItem/TabItem'

export default function TabLayout() {
	return (
		<Tabs
			tabBar={(props) => <TabItem {...props} />}
			screenOptions={{ headerShown: false }}
		>
			<Tabs.Screen name='home' />
			<Tabs.Screen name='transactions' />
			<Tabs.Screen name='report' />
			<Tabs.Screen name='profile' />
		</Tabs>
	)
}
