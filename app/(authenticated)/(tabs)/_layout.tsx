import TabItem from '@/components/TabItem'
import { Tabs } from 'expo-router'

const Layout = () => {
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

export default Layout
