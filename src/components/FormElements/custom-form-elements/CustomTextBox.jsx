'use client'

import { Controller } from 'react-hook-form'

// Components Imports
import TextField from '@mui/material/TextField';
const CustomTextBox = ({
  errors,
  labelName,
  name,
  customOnChange,
  control,
  placeHolder = '',
  disabled = false,
  required = false,
  rules = {},
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          fullWidth
          label={labelName}
          disabled={disabled}
          required={required}
          value={field?.value || ''} // Bind field value
          onChange={e => {
            field.onChange(e.target.value) // Update form value
            if (customOnChange) {
              customOnChange(e.target.value) // Custom onChange logic
            }
          }}
          error={Boolean(errors[name])} // Handle errors if any
          helperText={errors[name] ? errors[name].message : ''}
          placeholder={placeHolder}
          size="small"
        />
      )}
    />
  )
}

export default CustomTextBox
