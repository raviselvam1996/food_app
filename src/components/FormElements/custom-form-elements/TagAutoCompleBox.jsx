'use client'

import React from 'react';
import { Controller } from 'react-hook-form';
import { Autocomplete, Chip, TextField } from '@mui/material';

const TagAutocomplete = ({
    control,
    name,
    labelName,
    options = [],
    customOnChange,
    errors,
    placeHolder = '',
    rules = {}
}) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
                <Autocomplete
                    multiple
                    freeSolo
                    options={options}
                    value={field.value || []}
                    onChange={(event, newValue) => {
                        field.onChange(newValue);
                        if (customOnChange) {
                            customOnChange(newValue);
                        }
                    }}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip
                                label={option}
                                {...getTagProps({ index })}
                                key={option}
                            />
                        ))
                    }
                    renderInput={(params) => {
                        const fieldError = errors?.[name];
                        return (
                            <TextField 
                                {...params}
                                label={labelName}
                                placeholder={placeHolder}
                                error={Boolean(fieldError)}
                                helperText={fieldError ? fieldError.message : ''}
                            />
                        );
                    }}
                />
            )}
        />
    );
};

export default TagAutocomplete;
