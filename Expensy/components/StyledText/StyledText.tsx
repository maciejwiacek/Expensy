import { Text, TextProps } from 'react-native'
import React from 'react'
import globalStyles from '@/constants/globalStyles'

type Variant = keyof typeof globalStyles

interface CustomTextProps extends TextProps {
	children: React.ReactNode
	variant?: Variant
	style?: any
}

const StyledText = ({
	children,
	variant = 'bodyM',
	style,
	...props
}: CustomTextProps) => {
	if (!globalStyles[variant]) {
		console.warn(`Unknown variant: ${variant}`)
	}

	return (
		<Text
			style={[globalStyles[variant], style]}
			{...props}
			allowFontScaling={true}
		>
			{children}
		</Text>
	)
}

export default StyledText
