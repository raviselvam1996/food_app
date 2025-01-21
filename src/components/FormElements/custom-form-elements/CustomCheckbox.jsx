'use client'

// React Imports

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid2'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

// Third-party Imports
import { toast } from 'react-toastify'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Zod schema definition
const schema = z.object({
  checkbox: z.number()
})

const CustomCheckbox = () => {
  // Hooks
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      checkbox: 0 // Set default value
    }
  })

  const onSubmit = data => {
    console.log(data)
    toast.success('Form Submitted')
  }

  return (
    <Card>
      <CardHeader title='Basic' />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={6}>
            {/* Checkbox Field */}
            <Grid item xs={12}>
              <FormControl error={Boolean(errors.checkbox)}>
                <Controller
                  name='checkbox'
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...field}
                          checked={field.value == 1} // Ensure checkbox reflects the current value
                          onChange={e => {
                            field.onChange(e.target.checked ? 1 : 0) // Set to 1 if checked, otherwise 0
                          }}
                        />
                      }
                      label='Agree to our terms and conditions'
                    />
                  )}
                />
                {errors.checkbox && <FormHelperText error>{errors.checkbox.message}</FormHelperText>}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button size='large' type='submit' variant='contained'>
                Submit
              </Button>
              <Button size='large' type='reset' variant='outlined' color='secondary' onClick={() => reset()}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default CustomCheckbox
