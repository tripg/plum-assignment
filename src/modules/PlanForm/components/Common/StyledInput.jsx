import React from 'react'
import { Input, StyledInputContainer, StyledInputLabel } from '../../styles'

const StyledInput = ({label}) => {
    return (
        <StyledInputContainer>
            <StyledInputLabel>
                {label}
            </StyledInputLabel>
            <Input />
        </StyledInputContainer>
    )
}

export default StyledInput