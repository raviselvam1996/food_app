import { Controller } from 'react-hook-form';
import { format, parse, isValid } from 'date-fns';
import { enGB } from 'date-fns/locale';
import AppReactDatepicker from '../../mui/AppReactDatepicker';
import TextField from '@mui/material/TextField';
const DatePickerComponent = ({ errors, labelName, name, customOnChange, control }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange } }) => {
                // Parse and validate the date value
                const parsedValue = value && isValid(parse(value, 'dd/MM/yyyy', new Date()))
                    ? parse(value, 'dd/MM/yyyy', new Date())
                    : null;

                return (
                    <AppReactDatepicker
                        selected={parsedValue} // Parse the value only if it's valid
                        dateFormat="dd/MM/yyyy" // Force dd/MM/yyyy format
                        showYearDropdown
                        showMonthDropdown
                        locale={enGB} // Set locale to enforce the correct date format
                        onChange={(date) => {
                            // Format only if the date is valid
                            if (isValid(date)) {
                                const formattedDate = format(date, 'dd/MM/yyyy');
                                onChange(formattedDate); // Update the form value with the formatted date
                                if (customOnChange) {
                                    customOnChange(formattedDate); // Trigger the custom onChange handler
                                }
                            } else {
                                onChange(null); // Handle invalid date case
                            }
                        }}
                        placeholderText="DD/MM/YYYY" // Updated placeholder
                        customInput={
                            <TextField
                                value={value}
                                onChange={onChange}
                                fullWidth
                                label={labelName}
                                error={Boolean(errors[name])}
                                helperText={errors[name] ? errors[name].message : ''}
                                size="small"
                            />
                        }
                    />
                );
            }}
        />
    );
};

export default DatePickerComponent;
