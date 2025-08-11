import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type SelectableButtonProps<T> = {
  label: string
  value: T
  selectedValue: T
  onSelect: (value: T) => void
}

const SelectableButton = <T extends string | number>({
  label,
  value,
  selectedValue,
  onSelect,
}: SelectableButtonProps<T>) => {
  const isSelected = value === selectedValue

  return (
    <TouchableOpacity
      className={`flex-1 h-14 justify-center items-center rounded-2xl ${isSelected ? 'bg-blue-500 border-none' : 'bg-none border-neutral-600 border'}`}
      onPress={() => onSelect(value)}
    >
      <Text
        className={`text-center font-semibold ${isSelected ? 'text-white' : 'text-neutral-600'}`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default SelectableButton
