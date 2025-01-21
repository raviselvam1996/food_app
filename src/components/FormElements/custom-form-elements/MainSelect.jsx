'use client'

import { Controller } from 'react-hook-form'

// Components Imports
import TextField from '@mui/material/TextField';
import CustomAutocomplete from '../../mui/Autocomplete'

const MainSelect = ({
  movieOptions,
  errors,
  labelName,
  name,
  customOnChange,
  control,
  placeHolder = '',
  required = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <CustomAutocomplete
          fullWidth
          options={movieOptions} // Use state for options
          getOptionLabel={option => option.custom_label || ''}
          isOptionEqualToValue={(option, value) => option.custom_id === value.custom_id}
          onChange={(event, value) => {
            field.onChange(value?.custom_id || null)
            if (customOnChange) {
              customOnChange(value?.custom_id)
            }
          }}
          value={movieOptions.find(film => film.custom_id === field.value) || null}
          renderInput={params => {
            const errorss = errors[name]
            return (
              <TextField
                {...params}
                label={labelName}
                error={Boolean(errorss)}
                helperText={errorss ? errorss.message : ''}
                placeholder={placeHolder}
                required={required}
                size="small"
              />
            )
          }}
        />
      )}
    />
  )
}

export default MainSelect
