'use client'

import { Controller } from 'react-hook-form'

// Components Imports
import TextField from '@mui/material/TextField';
import CustomAutocomplete from '../../mui/Autocomplete'

const CustomMultiSelect = ({
  options,
  errors,
  labelName,
  name,
  customOnChange,
  control,
  placeHolder = '',
  rules = {},
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <CustomAutocomplete
          {...field}
          id={name}
          multiple
          options={options}
          getOptionLabel={option => option.custom_label || ''} // Display movie title
          isOptionEqualToValue={(option, value) => option.custom_id === value.custom_id} // Compare using year
          value={options.filter(option => Array.isArray(field.value) && field.value.includes(option.custom_id))}
          onChange={(event, value) => {
            field.onChange(value.map(item => item.custom_id))
            if (customOnChange) {
              customOnChange(value.map(item => item.custom_id))
            }
          }} // Store only year in form
          renderInput={params => {
            const errorss = errors[name]
            return (
              <TextField
                {...params}
                label={labelName}
                error={Boolean(errorss)}
                helperText={errorss ? errorss.message : ''}
                placeholder={placeHolder}
                size="small"
              />
            )
          }}
        />
      )}
    />
  )
}

export default CustomMultiSelect
