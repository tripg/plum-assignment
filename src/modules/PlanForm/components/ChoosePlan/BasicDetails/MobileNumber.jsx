import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import StyledInput from '../../Common/StyledInput'

const MobileNumber = ({formValues, setFormValues, formErrors, setFormErrors}) => {
    const [value, setValue] = React.useState(null)

    const handleValueChange = React.useCallback((event) => {
        const newValue = event.target.value
        setValue(newValue)
        setFormValues({...formValues, mobileNumber: newValue})
    }, [formValues, setFormValues])

    useEffect(() => {
        if(value){
            setFormErrors({...formErrors, mobileNumber: ""})
        }
    },[formErrors, setFormErrors, value])
    
    return (
        <Grid style={{ background: '#FFFFFF' }} item xs={6}>
            <StyledInput 
                label={'Mobile number'}
                value={value}
                handleChange={handleValueChange}
                error={formErrors.mobileNumber} />
        </Grid>
    )
}

export default MobileNumber