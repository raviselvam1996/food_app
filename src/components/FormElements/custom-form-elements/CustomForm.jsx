'use client'

// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid2'

import Button from '@mui/material/Button'

// Third-party Imports
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import CustomMultiSelect from './CustomMultiSelect'
import CustomTextBox from './CustomTextBox'
import MainSelect from './MainSelect'
import CustomDefaultSelect from './CustomDefaultSelect'
import TagAutocomplete from './TagAutoCompleBox'
// import DatePickerComponent from './CustomDatePicker'
import CheckboxComponent from './CustomCheckboxs'
import TextareaComponent from './CustomtTextArea'
import RadioComponent from './CustomRadioButton'
import SwitchComponent from './CustomSwitchBox'
// Styled Component Imports


// Sample data for autocomplete
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Dark Knight', year: 2008 },
    { title: 'Schindler’s List', year: 1993 }
    // Add more movie options here...
]

// Zod schema definition
const schema = z.object({
    groupedItems: z.array(z.number()).nonempty("At least one year is required"), // Expect an array of numbers (years)

    firstName: z.string().min(1, 'First name is required'),
    // dob: z.string(),
    country: z.number().min(1, 'Country selection is required'),
    textarea: z.string().min(1, 'Bio is required'),
    radio: z.string().min(1, 'Gender selection is required'),
    checkbox: z.number().refine(val => val == 1, { message: 'You must agree to the terms and conditions' }),
    movies: z
        .number()
        .nullable()
        .refine(val => val !== null, { message: 'Movie year selection is required' }),
    tags: z.array(z.string()).nonempty('One Value Required'),
    switch: z.number()
})

const CustomForm = () => {
    // States
    const [movieOptions, setMovieOptions] = useState([])
    const [country, setCountry] = useState([])
    const [selectedTags, setSelectedTags] = useState([]);
    const options = ['Apple', 'Banana', 'Cherry', 'Date'];

    const countries = [
        { value: 1, label: 'UK' },
        { value: 2, label: 'USA' },
        { value: 3, label: 'Australia' },
        { value: 4, label: 'Germany' }
    ];
    const radioOptions = [
        { value: 1, label: 'Female' },
        { value: 2, label: 'Male' },
        { value: 3, label: 'Other' },
    ];
    useEffect(() => {
        const datas = countries.map((opt) => {
            return {
                custom_label: opt.label,
                custom_id: opt.value
            }
        })
        setCountry(datas)
    }, [])
    useEffect(() => {
        const datadd = top100Films.map(option => {
            return { custom_label: option.title, custom_id: option.year }
        })
        setMovieOptions(datadd) // Set the new options based on selection
    }, [])
    // useEffect(() => {
    //     setSelectedTags(options)
    // }, [options])
    const handleChange = (newValue) => {
        setSelectedTags(newValue);
        console.log(newValue, '================');
        console.log(selectedTags);
        
    };

    // Hooks
    const {
        control,
        reset,
        getValues,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            groupedItems: [],

            firstName: '',
            lastName: '',
            email: '',
            password: '',
            dob: null,
            select: '',
            textarea: '',
            radio: '',
            checkbox: 0,
            language: [], // Default value for language
            movie: null, // Default value for movie (autocomplete)
            switch:0
        }
    })

    // const handleClickShowPassword = () => setIsPasswordShown(show => !show)
    const onSubmit = data => {
        // const yearsOnly = data.groupedItems.map(item => item.year)

        // Validate using Zod schema

        console.log(data) // Logs form values to the console
        const { groupedItems } = getValues()
        console.log(groupedItems)
        toast.success('Form Submitted')
    }
    const customOnchange2 = val => {
        console.log(val, 'customOnchange2')
        const { groupedItems } = getValues()
        console.log(groupedItems)
    }
    const switchHandleCheck = val => {
        console.log(val);
    }
    const radioHandleCheck = val => {
        console.log(typeof (val));
    }
    return (
        <Card>
            <CardHeader title='Basic' />
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={4}>

                    <Grid  size={12} className='flex gap-4'>
                        <Button variant='contained' type='submit'>
                            Submit
                        </Button>
                        <Button variant='tonal' color='secondary' type='reset' onClick={() => reset()}>
                            Reset
                        </Button>
                    </Grid>
                        <Grid size={12}>
                            {/* Custom text box */}
                            <CustomTextBox name={'firstName'} labelName={'First Name'} errors={errors} control={control} placeHolder={'FirstName'} />
                        </Grid>

                    <Grid  size={8}>
                        {/* Search Select Box */}
                        <MainSelect
                            control={control}
                            movieOptions={movieOptions}
                            labelName={'movies'}
                            name={'movies'}
                            errors={errors}
                            placeHolder={'Search Select Box'}
                        />
                    </Grid>
                    <Grid  size={8}>
                        {/* Multi Select Box */}
                        <CustomMultiSelect
                            control={control}
                            options={movieOptions}
                            labelName={'With Categories'}
                            name={'groupedItems'}
                            errors={errors}
                            customOnChange={customOnchange2}
                            placeHolder={'Search Select Box'}
                        />
                    </Grid>
                    <Grid  size={8}>
                        {/* Default select Box */}
                        <CustomDefaultSelect
                            name="country"
                            control={control}
                            labelName="Country"
                            options={country}
                            errors={errors}
                            customOnChange={(value) => console.log("Selected Country:", value)}

                        />
                    </Grid>
                    <Grid  size={8}>
                        {/* Tag Typo Text Box */}
                        <TagAutocomplete
                            control={control}
                            name="tags"
                            labelName="Select and type"
                            options={options}
                            errors={errors}
                            customOnChange={handleChange}
                            placeHolder={'placeHolder'}
                        />
                    </Grid>
                    <Grid  size={8}>
                        {/* Date Picker */}
                        {/* <DatePickerComponent
                            name="dob"
                            labelName="Date of Birth"
                            control={control}
                            errors={errors}
                            customOnChange={(formattedDate) => {
                                console.log('Selected date:', formattedDate);
                            }}
                        /> */}
                    </Grid>
                    <Grid  size={8}>
                        {/* Checkbox With Number Accept */}
                        <CheckboxComponent
                            control={control}
                            name="checkbox"
                            labelName="Agree to our terms and conditions"
                            errors={errors}
                        />
                    </Grid>
                    <Grid  size={8}>
                        {/* Textarea text Box */}
                        <TextareaComponent
                            control={control}
                            name="textarea"
                            labelName="Bio"
                            errors={errors}
                            placeHolder='Type Here'
                            rows={2}
                        />
                    </Grid>
                    <Grid  size={8}>
                        {/* Radio Button */}
                        <RadioComponent
                            control={control}
                            name="radio"
                            labelName="Gender"
                            options={radioOptions}
                            errors={errors}
                            customOnChange={radioHandleCheck}

                        />
                    </Grid>
                    <Grid  size={8}>
                        {/* Switch Slider Component  */}
                        <SwitchComponent
                            control={control}
                            name="switch"
                            labelName="Controlled Switch"
                            errors={errors}
                            labelPlacement="start"
                            customOnChange={switchHandleCheck}
                        />
                    </Grid>
                    </Grid>


                </form>
            </CardContent>
        </Card>
    )
}

export default CustomForm
