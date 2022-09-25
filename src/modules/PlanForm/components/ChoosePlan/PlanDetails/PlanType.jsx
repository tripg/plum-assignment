import React from 'react'
import { planTypes } from '../../../../constants/data'
import DropDown from '../../DropDown/DropDown'

const PlanType = ({formValues, setFormValues}) => {
    const [value, setValue] = React.useState('')

    const handleChange = React.useCallback((event) => {
        const newValue=event.value.target
        setValue(newValue)
        setFormValues({...formValues, planType: newValue})
    },[formValues, setFormValues])

    return (
        <DropDown
            defaultValue="Select your plan"
            options={planTypes}
            onChange={handleChange} />
    )
}

export default PlanType