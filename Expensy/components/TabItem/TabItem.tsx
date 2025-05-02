import { TouchableOpacity, View } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { ChartBar, House, User, Wallet } from 'phosphor-react-native'
import styles from './styles'
import { colors } from '@/constants/colors'

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
									? colors.highlight500
									: colors.light500
							}
							weight={isFocused ? 'fill' : 'regular'}
						/>
					)
				}

				const tabIcon: Record<string, JSX.Element> = {
					home: generateIcon(House, isFocused, colors),
					transactions: generateIcon(Wallet, isFocused, colors),
					report: generateIcon(ChartBar, isFocused, colors),
					profile: generateIcon(User, isFocused, colors),
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
