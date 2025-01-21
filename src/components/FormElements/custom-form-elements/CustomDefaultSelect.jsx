'use client'

import { Controller } from 'react-hook-form'

// Components Imports
import { MenuItem, TextField } from '@mui/material'
const CustomDefaultSelect = ({
  options,
  errors,
  labelName,
  name,
  customOnChange,
  control,
  rules = {},
  minWidth = '100px',
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          select
          fullWidth
          label={labelName}
          {...field}
          value={field.value ?? ''} // Ensure value is controlled
          error={Boolean(errors[name])}
          helperText={errors[name]?.message} // Show the error message if any
          sx={{ minWidth }} // Use the `minWidth` prop with a default of '150px'
          onChange={e => {
            field.onChange(e.target.value) // Update form's value
            if (customOnChange) {
              customOnChange(e.target.value) // Custom onChange logic
            }
          }}
          size="small"
        >
          <MenuItem value=''>Select {labelName}</MenuItem>
          {options.length > 0 &&
            options.map(option => (
              <MenuItem key={option.custom_id} value={option.custom_id}>
                {option.custom_label}
              </MenuItem>
            ))}
        </TextField>
      )}
    />
  )
}

export default CustomDefaultSelect
