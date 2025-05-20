import { Colors } from '@/constants/Colors'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { ChartBar, House, User, Wallet } from 'phosphor-react-native'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const TabItem = ({ state, navigation }: BottomTabBarProps) => {
	return (
		<View style={styles.container}>
			{state.routes.map((route, index) => {
				if (route.name === 'index') return null

				const isFocused = state.index === index

				const generateIcon = (
					IconComponent: React.ComponentType<any>,
					isFocused: boolean,
					colors: { highlight500: string; light500: string }
				) => {
					return (
						<IconComponent
							size={26}
							color={
								isFocused
									? Colors.highlight500
									: Colors.light500
							}
							weight={isFocused ? 'fill' : 'regular'}
						/>
					)
				}

				const tabIcon: Record<string, JSX.Element> = {
					home: generateIcon(House, isFocused, Colors),
					transactions: generateIcon(Wallet, isFocused, Colors),
					report: generateIcon(ChartBar, isFocused, Colors),
					profile: generateIcon(User, isFocused, Colors),
				}

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					})

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params)
					}
				}

				return (
					<TouchableOpacity
						key={route.key}
						onPress={onPress}
						style={styles.tabButton}
					>
						{tabIcon && tabIcon[route.name]}
					</TouchableOpacity>
				)
			})}
		</View>
	)
}

export default TabItem

const styles = StyleSheet.create({
	container: {
		width: '100%',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingTop: 15,
		height: 80,
		borderTopWidth: 1,
		borderTopColor: Colors.light300,
	},
	tabButton: {
		flex: 1,
		alignItems: 'center',
	},
})
