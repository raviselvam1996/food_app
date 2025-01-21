'use client'

import React from 'react'
import { Controller } from 'react-hook-form'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText } from '@mui/material'


const RadioComponent = ({
  control,
  name,
  labelName,
  options = [],
  errors,
  customOnChange, // Added customOnChange prop
  
}) => {
  return (
    <FormControl error={Boolean(errors?.[name])}>
      <FormLabel>
        {
          <>
            {labelName}
          </>
        }
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup
            row
            {...field}
            name={name}
            value={field.value ?? ''}
            onChange={event => {
              field.onChange(event.target.value) // Update form state
              if (customOnChange) {
                customOnChange(event.target.value) // Call customOnChange function
              }
            }}
          >
            {options.map(option => (
              <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
            ))}
          </RadioGroup>
        )}
      />
      {errors?.[name] && <FormHelperText error>{errors[name].message}</FormHelperText>}
    </FormControl>
  )
}

export default RadioComponent
