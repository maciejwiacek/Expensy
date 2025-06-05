import { Colors } from '@/constants/Colors'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { ChartBar, House, User, Wallet } from 'phosphor-react-native'
import { JSX } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const TabItem = ({ state, navigation }: BottomTabBarProps) => {
	return (
		<View style={styles.container}>
			{state.routes.map((route, index) => {
				if (route.name === 'index') return null

				const isFocused = state.index === index

				const generateIcon = (
					IconComponent: React.ComponentType<any>,
					isFocused: boolean
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
					home: generateIcon(House, isFocused),
					transactions: generateIcon(Wallet, isFocused),
					report: generateIcon(ChartBar, isFocused),
					profile: generateIcon(User, isFocused),
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
						hitSlop={10}
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
		backgroundColor: 'white',
	},
	tabButton: {
		flex: 1,
		alignItems: 'center',
	},
})
