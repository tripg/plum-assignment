import React from 'react'
import { CheckboxContainer, InputCheckbox, StyledCheckboxLabel } from '../../styles'

const StyledCheckbox = ({ label }) => {
    return (
        <CheckboxContainer>
            <InputCheckbox />
            <StyledCheckboxLabel>
                {label}
            </StyledCheckboxLabel>
        </CheckboxContainer>
    )
}

export default StyledCheckbox