'use client'

import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Autocomplete, Chip } from '@mui/material';
import TextField from '@mui/material/TextField';

const HuidTagComponent = ({
    control,
    name,
    labelName,
    options = [],
    customOnChange,
    errors,
    placeHolder = '',
    rules = {}
}) => {
    const [inputValue, setInputValue] = useState(''); // State to manage the input value

    // Function to validate any 6-character input
    const isValidSixCharacterInput = (value) => value.length === 6;

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
                    inputValue={inputValue} // Control the input value
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue); // Update the input value state
                    }}
                    // Handle selection changes
                    onChange={(event, newValue) => {
                        // Ensure only valid inputs (with exactly 6 characters) are kept
                        const validValues = newValue.filter(isValidSixCharacterInput);
                        field.onChange(validValues);
                        if (customOnChange) {
                            customOnChange(validValues);
                        }
                        setInputValue(''); // Clear the input value after tag is created
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
                                size="small"
                            />
                        );
                    }}
                />
            )}
        />
    );
};

export default HuidTagComponent;
