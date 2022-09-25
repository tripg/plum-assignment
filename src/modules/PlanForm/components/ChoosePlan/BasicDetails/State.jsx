import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import StyledInput from '../../Common/StyledInput'

const State = ({formValues, setFormValues, formErrors, setFormErrors}) => {
    const [value, setValue] = React.useState(null)

    const handleValueChange = React.useCallback((event) => {
        const newValue=event.target.value
        setValue(newValue)
        setFormValues({...formValues, state: newValue})
    }, [formValues, setFormValues])

    useEffect(() => {
        if(value){
            setFormErrors({...formErrors, state: ""})
        }
    },[formErrors, setFormErrors, value])

    return (
        <Grid style={{ background: '#FFFFFF' }} item xs={6}>
            <StyledInput 
                label={'State'}
                value={value}
                handleChange={handleValueChange}
                error={formErrors.state} />
        </Grid>
    )
}

export default State