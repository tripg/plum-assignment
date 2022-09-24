import React from 'react'
import { planTypes } from '../../../../constants/data'
import { StyledDropdown } from '../../../styles'

const PlanType = () => {
    return (
        <StyledDropdown
            options={planTypes}/>
    )
}

export default PlanType