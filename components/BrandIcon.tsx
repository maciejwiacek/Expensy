import React from 'react'
import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import * as simpleIcons from 'simple-icons'

type BrandIconProps = {
	name: string
	color?: string
	size?: number
	fallback?: React.ReactNode
}

const BrandIcon = ({
	name,
	color = 'black',
	size = 32,
	fallback,
}: BrandIconProps) => {
	const slug = 'si' + name.replace(/\s+/g, '').replace('.', '')

	// @ts-ignore dynamic access
	const icon = simpleIcons[slug]

	if (!icon) {
		return fallback
	}

	const isLidl = name === 'Lidl'
	const scaleFactor = isLidl ? 1.05 : 1

	return (
		<View
			style={{
				width: size,
				height: size,
				overflow: 'hidden',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Svg
				width={size * scaleFactor}
				height={size * scaleFactor}
				viewBox={'0 0 24 24'}
				fill='none'
				accessibilityRole='image'
				accessible
				accessibilityLabel={name + ' logo'}
				preserveAspectRatio='xMidYMax meet'
			>
				<Path d={icon.path} fill={color} />
			</Svg>
		</View>
	)
}

export default BrandIcon
