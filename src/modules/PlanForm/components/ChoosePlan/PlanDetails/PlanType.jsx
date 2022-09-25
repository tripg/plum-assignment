import React, { useEffect } from 'react'
import { planTypes } from '../../../../constants/data'
import DropDown from '../../DropDown/DropDown'

const PlanType = ({formValues, setFormValues, formErrors, setFormErrors}) => {
    const [value, setValue] = React.useState('')

    const handleChange = React.useCallback((event) => {
        const newValue=event.value.target
        setValue(newValue)
        setFormValues({...formValues, planType: newValue})
    },[formValues, setFormValues])

    useEffect(() => {
        if(value){
            setFormErrors({...formErrors, planType: ""})
        }
    },[formErrors, setFormErrors, value])


    return (
        <DropDown
            defaultValue="Select your plan"
            options={planTypes}
            onChange={handleChange}
            error={formErrors.planType} />
    )
}

export default PlanType