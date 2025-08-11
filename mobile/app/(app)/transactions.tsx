import FilterBottomSheet from '@/components/FilterBottomSheet'
import TransactionItem from '@/components/TransactionItem'
import { SortOption } from '@/enums/sortOptions'
import { useTransactions } from '@/lib/firebase/transactions/useTransactions'
import { sortTransactions } from '@/utils/sortTransactions'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import React, { useRef, useState } from 'react'
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import Animated, { LinearTransition } from 'react-native-reanimated'

const Transactions = () => {
  const { data: transactions } = useTransactions()
  const [searchQuery, setSearchQuery] = useState('')
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const [sortOption, setSortOption] = useState<SortOption>(SortOption.DATE_ASC)

  const openFilterSheet = () => {
    bottomSheetRef.current?.present()
  }

  const sortedTransactions = sortTransactions(
    transactions?.filter((tx) =>
      tx.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [],
    sortOption
  )

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className='flex-1 bg-white pt-24 px-4'>
          <Text className='text-xl font-bold'>Transakcje</Text>

          <View className='flex-row items-center w-full gap-x-4 my-4'>
            <TextInput
              className='bg-neutral-100 px-4 h-12 rounded-full flex-1'
              placeholder='Szukaj'
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <TouchableOpacity
              className='bg-blue-600 w-12 h-12 rounded-full justify-center items-center'
              onPress={openFilterSheet}
            >
              <FontAwesome name='filter' size={24} color='white' />
            </TouchableOpacity>
          </View>

          <FlatList
            data={sortedTransactions}
            renderItem={({ item }) => (
              <Animated.View
                layout={LinearTransition}
                className='rounded-2xl overflow-hidden'
              >
                <TransactionItem key={item.id} transaction={item} />
              </Animated.View>
            )}
            contentContainerStyle={{ gap: 14, flexGrow: 1, paddingBottom: 14 }}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode='on-drag'
          />
        </View>
      </TouchableWithoutFeedback>

      <FilterBottomSheet
        ref={bottomSheetRef}
        currentSort={sortOption}
        onSortChange={(option) => {
          setSortOption(option)
          bottomSheetRef.current?.dismiss()
        }}
      />
    </>
  )
}

export default Transactions
