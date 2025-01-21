'use client'

import React from 'react'
import { Controller } from 'react-hook-form'
import { FormGroup, FormControlLabel, Switch, FormHelperText } from '@mui/material'


const SwitchComponent = ({
  control,
  name,
  labelName,
  errors,
  customOnChange,
  labelPlacement = 'start',
  valueChecked = 1, // Default value when checked
  valueUnchecked = 0, // Default value when unchecked
  
}) => {


  return (
    <FormGroup row>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            label={
              <>
                {labelName}
              </>
            }
            labelPlacement={labelPlacement}
            control={
              <Switch
                {...field}
                checked={field.value === valueChecked} // Ensure the switch reflects the current value
                onChange={e => {
                  field.onChange(e.target.checked ? valueChecked : valueUnchecked) // Set to true or false
                  if (customOnChange) {
                    customOnChange(e.target.checked ? valueChecked : valueUnchecked)
                  }
                }}
              />
            }
          />
        )}
      />
      {errors?.[name] && <FormHelperText error>{errors[name].message}</FormHelperText>}
    </FormGroup>
  )
}

export default SwitchComponent
