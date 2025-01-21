'use client'

import React from 'react'
import { Controller } from 'react-hook-form'
import { FormControl, FormControlLabel, Checkbox, FormHelperText } from '@mui/material'


const CheckboxComponent = ({
  control,
  name,
  labelName,
  errors,
  customOnChange,
  valueChecked = 1, // Default value when checked
  valueUnchecked = 0, // Default value when unchecked
  disabled = false,
}) => {


  return (
    <FormControl error={Boolean(errors?.[name])}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                disabled={disabled} // Apply dynamic disabled state
                {...field}
                checked={field.value === valueChecked} // Reflect the current value
                onChange={e => {
                  field.onChange(e.target.checked ? valueChecked : valueUnchecked)
                  if (customOnChange) {
                    customOnChange(e.target.checked ? valueChecked : valueUnchecked)
                  }
                }}
              />
            }
            label={
              <>
                {labelName}
              </>
            }
          />
        )}
      />
      {errors?.[name] && <FormHelperText error>{errors[name].message}</FormHelperText>}
    </FormControl>
  )
}

export default CheckboxComponent
