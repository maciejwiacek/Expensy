import { SortOption } from '@/enums/sortOptions'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import React, { forwardRef, useMemo } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'

const sortOptions = [
  { label: 'Data rosnąco', value: SortOption.DATE_ASC },
  { label: 'Data malejąco', value: SortOption.DATE_DESC },
  { label: 'Nazwa A-Z', value: SortOption.NAME_ASC },
  { label: 'Nazwa Z-A', value: SortOption.NAME_DESC },
  { label: 'Kwota rosnąco', value: SortOption.AMOUNT_ASC },
  { label: 'Kwota malejąco', value: SortOption.AMOUNT_DESC },
]

type FilterBottomSheetProps = {
  currentSort: SortOption
  onSortChange: (option: SortOption) => void
}

const FilterBottomSheet = forwardRef<BottomSheetModal, FilterBottomSheetProps>(
  function FilterBottomSheetComponent({ currentSort, onSortChange }, ref) {
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
            className='flex-row'
          >
            {sortOptions.map((option, index) => (
              <TouchableOpacity
                key={option.value}
                className={`h-14 w-40 justify-center items-center rounded-2xl
                  ${index - 1 < sortOptions.length ? 'mr-4' : ''}
                  ${currentSort === option.value ? 'bg-blue-700 border-none' : 'bg-none border border-gray-600'}`}
                onPress={() => onSortChange(option.value)}
              >
                <Text
                  className={`font-medium text-lg ${currentSort === option.value ? 'text-white' : 'text-gray-600'}`}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text className='text-xl font-semibold mb-4'>Filtruj według</Text>
        </BottomSheetView>
      </BottomSheetModal>
    )
  }
)

export default FilterBottomSheet
