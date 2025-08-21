import React, { useState } from 'react'
import { View, LayoutChangeEvent, ViewStyle, ScrollView } from 'react-native'

type ReceiptWrapperProps = {
  triangleWidth?: number
  triangleHeight?: number
  style?: ViewStyle
  children: React.ReactNode
  shadowColor?: string
  shadowOffsetX?: number
  shadowOffsetY?: number
  backgroundColor?: string
}

const ReceiptWrapper = ({
  triangleWidth = 17,
  triangleHeight = 7,
  style,
  children,
  shadowColor = '#000',
  shadowOffsetX = 0,
  shadowOffsetY = 6,
  backgroundColor = 'white',
}: ReceiptWrapperProps) => {
  const [layout, setLayout] = useState({ width: 0, height: 0 })

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout
    setLayout({ width, height })
  }

  const { width, height } = layout
  if (width === 0 || height === 0) {
    return <View style={[style, { backgroundColor }]} onLayout={onLayout} />
  }

  // Calculate how many triangles fit across the width
  const triangleCount = Math.floor(width / triangleWidth)
  const extra = width - triangleCount * triangleWidth
  const adjustedTriangleWidth = triangleWidth + extra / triangleCount

  // Triangles styles positioned absolutely at bottom with upward triangles
  const triangleStyleBase = {
    position: 'absolute' as const,
    width: 0,
    height: 0,
    borderLeftWidth: adjustedTriangleWidth / 2,
    borderRightWidth: adjustedTriangleWidth / 2,
    borderTopWidth: triangleHeight, // switch borderBottomWidth to borderTopWidth
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: backgroundColor, // color of triangle (matching container background)
  }

  return (
    <View
      style={[
        {
          backgroundColor,
          shadowColor,
          shadowOffset: { width: shadowOffsetX, height: shadowOffsetY },
          shadowOpacity: 0.3,
          shadowRadius: 6,
          overflow: 'visible',
          paddingBottom: triangleHeight,
        },
        style,
      ]}
      onLayout={onLayout}
    >
      {/* Triangles: absolute positioned, bottom aligned, spaced horizontally */}
      {Array.from({ length: triangleCount }).map((_, i) => (
        <View
          key={i}
          style={[
            triangleStyleBase,
            {
              left: i * adjustedTriangleWidth,
              bottom: -triangleHeight, // slightly raised to show cutout effect
            },
          ]}
        />
      ))}

      {/* Content container with top rounded corners, clips overflow */}
      <View
        style={{
          flex: 1,
          overflow: 'hidden',
          backgroundColor,
        }}
      >
        {children}
      </View>
    </View>
  )
}

export default ReceiptWrapper
