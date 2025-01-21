'use client'

import { Controller } from 'react-hook-form'

// Components Imports
import TextField from '@mui/material/TextField';

const CustomNumberBox = ({ errors, labelName, name, customOnChange, control, placeHolder = '', disabled = false, rules = {}, minWidth = '100px', required = false }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
                <TextField
                    fullWidth
                    label={labelName}
                    type="number" // Set type to number
                    value={field.value || ''} // Bind field value
                    required={required}
                    onChange={(e) => {
                        // Ensure only valid numbers are accepted
                        const value = Number(e.target.value);
                        if (!isNaN(value) || value === '') { // Allow empty value for deletion
                            // Ensure value is not negative and is a valid number
                            if (value >= 0 || e.target.value === '') { // Allow empty value for deletion
                                field.onChange(value); // Update form value
                                // Call custom onChange if provided
                                if (customOnChange) {
                                    customOnChange(value);
                                }
                            }
                        }
                    }}

                    error={Boolean(errors[name])} // Handle errors if any
                    helperText={errors[name] ? errors[name].message : ''}
                    placeholder={placeHolder}
                    disabled={disabled} // Apply dynamic disabled state
                    sx={{ minWidth }} // Use the `minWidth` prop with a default of '150px'
size="small"

                />
            )}
        />
    );
};

export default CustomNumberBox;
