'use client'






import React, { useEffect, useState } from 'react';
import { Autocomplete, Chip, } from '@mui/material';
import TextField from '@mui/material/TextField';

const TagAutocomplete = ({ label, options }) => {
    const [selectedTags, setSelectedTags] = useState([]);
    useEffect(() => {
        setSelectedTags(options)
    }, [options])
    const handleChange = (event, newValue) => {
        setSelectedTags(newValue);
        console.log(newValue, '================');
    };

    return (

        <Autocomplete
            multiple
            freeSolo
            value={selectedTags}
            onChange={handleChange}
            options={options}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        label={option}
                        {...getTagProps({ index })}
                        key={option}
                    />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label={label}
                    placeholder="Type and press Enter..."
                    size="small"
                />
            )}
        />
    );
};

// Usage Example
const TypeSelectBox = () => {
    const options = ['Apple', 'Banana', 'Cherry', 'Date'];

    return (
        <div>
            <TagAutocomplete label="Select and type" options={options} />
        </div>
    );
};

export default TypeSelectBox;


