'use client'

import React from 'react'
import { Controller } from 'react-hook-form'
import TextField from '@mui/material/TextField';

const TextareaComponent = ({
  control,
  name,
  labelName,
  rows = 4, // Default rows
  errors,
  placeHolder = '',
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          rows={rows}
          fullWidth
          multiline
          label={labelName}
          placeholder={placeHolder}
          error={Boolean(errors?.[name])} // Check for errors
          helperText={errors?.[name] ? errors[name].message : ''} // Display error message
          size="small"
        />
      )}
    />
  )
}

export default TextareaComponent
