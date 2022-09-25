import { Grid } from '@material-ui/core'
import React from 'react'
import StyledInput from '../../Common/StyledInput'

const State = ({formValues, setFormValues}) => {
    const [value, setValue] = React.useState(null)

    const handleValueChange = React.useCallback((event) => {
        const newValue=event.target.value
        setValue(newValue)
        setFormValues({...formValues, state: newValue})
    }, [formValues, setFormValues])

    return (
        <Grid style={{ background: '#FFFFFF' }} item xs={6}>
            <StyledInput 
                label={'State'}
                value={value}
                handleChange={handleValueChange} />
        </Grid>
    )
}

export default State