import { Grid } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import StyledInput from '../../Common/StyledInput'

const Email = ({formValues, setFormValues, formErrors, setFormErrors}) => {
    const [value, setValue] = React.useState(null)

    const handleValueChange = React.useCallback((event) => {
        const newValue=event.target.value
        setValue(newValue)
        setFormValues({...formValues, email: newValue})
    }, [formValues, setFormValues])

    useEffect(() => {
        if(value){
            setFormErrors({...formErrors, email: ""})
        }
    },[formErrors, setFormErrors, value])

    return (
        <Grid style={{ background: '#FFFFFF' }} item xs={6}>
            <StyledInput
                label={'Personal email address'}
                value={value}
                handleChange={handleValueChange}
                error={formErrors.email} />
        </Grid>
    )
}

export default Email