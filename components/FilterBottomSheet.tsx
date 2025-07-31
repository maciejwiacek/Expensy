import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import React, { forwardRef, useMemo } from 'react'
import { ScrollView, Text, View } from 'react-native'

// Optional props — extend later if needed
type FilterBottomSheetProps = {}

const FilterBottomSheet = forwardRef<BottomSheetModal, FilterBottomSheetProps>(
  function FilterBottomSheetComponent(_props, ref) {
    const snapPoints = useMemo(() => ['25%', '75%'], [])

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        style={{
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.07,
          shadowRadius: 10,
        }}
      >
        <BottomSheetView className='h-[500px] px-4'>
          <Text className='text-xl font-semibold mb-4'>Sortuj według</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className='flex-row gap-x-4'
          >
            <View className='h-14 w-40 justify-center items-center rounded-2xl bg-blue-600'>
              <Text className='text-white font-medium text-lg'>Kwoty</Text>
            </View>

            <View className='h-14 w-40 justify-center items-center rounded-2xl bg-blue-600'>
              <Text className='text-white font-medium text-lg'>Kwoty</Text>
            </View>
            <View className='h-14 w-40 justify-center items-center rounded-2xl bg-blue-600'>
              <Text className='text-white font-medium text-lg'>Kwoty</Text>
            </View>
            <View className='h-14 w-40 justify-center items-center rounded-2xl bg-blue-600'>
              <Text className='text-white font-medium text-lg'>Kwoty</Text>
            </View>
            <View className='h-14 w-40 justify-center items-center rounded-2xl bg-blue-600'>
              <Text className='text-white font-medium text-lg'>Kwoty</Text>
            </View>
          </ScrollView>
        </BottomSheetView>
      </BottomSheetModal>
    )
  }
)

export default FilterBottomSheet
