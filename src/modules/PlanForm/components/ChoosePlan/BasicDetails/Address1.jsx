import { Grid } from '@material-ui/core'
import React from 'react'
import StyledInput from '../../Common/StyledInput'

const Address1 = ({formValues, setFormValues}) => {
    const [value, setValue] = React.useState(null)

    const handleValueChange = React.useCallback((event) => {
        const newValue = event.target.value
        setValue(newValue)
        setFormValues({...formValues, address1: newValue})
    }, [setFormValues, formValues])

    return (
        <Grid style={{ background: '#FFFFFF' }} item xs={6}>
            <StyledInput 
                label={'Address line 01'}
                value={value}
                handleChange={handleValueChange} />
        </Grid>
    )
}

export default Address1