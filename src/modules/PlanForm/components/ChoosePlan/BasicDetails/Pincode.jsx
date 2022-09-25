import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import StyledInput from '../../Common/StyledInput'

const Pincode = ({formValues, setFormValues, formErrors, setFormErrors}) => {
    const [value, setValue] = React.useState(null)

    const handleValueChange = React.useCallback((event) => {
        const newValue=event.target.value
        setValue(newValue)
        setFormValues({...formValues, pinCode: newValue})
    }, [formValues,setFormValues])

    useEffect(() => {
        if(value){
            setFormErrors({...formErrors, pinCode: ""})
        }
    },[formErrors, setFormErrors, value])

    return (
        <Grid style={{ background: '#FFFFFF' }} item xs={6}>
            <StyledInput
                label={'Pincode'}
                value={value}
                handleChange={handleValueChange}
                error={formErrors.pinCode} />
        </Grid>
    )
}

export default Pincode