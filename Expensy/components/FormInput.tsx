import React from 'react'
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form'
import { TextInputProps } from 'react-native'
import CustomInput from './CustomInput'

interface FormInputProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  errors?: FieldErrors<T>
  label: string
  placeholder: string
  inputProps?: TextInputProps
}

const FormInput = <T extends FieldValues>({
  name,
  control,
  errors,
  label,
  placeholder,
  inputProps,
}: FormInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <CustomInput
          label={label}
          props={{
            placeholder: placeholder,
            onChangeText: onChange,
            onBlur: onBlur,
            value: value,
            ...inputProps,
          }}
        />
      )}
    />
  )
}

export default FormInput
