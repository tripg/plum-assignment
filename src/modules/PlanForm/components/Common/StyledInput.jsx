import React from 'react'
import { Input, StyledInputContainer, StyledInputLabel } from '../../styles'

const StyledInput = ({label, value, handleChange}) => {
    return (
        <StyledInputContainer>
            <StyledInputLabel>
                {label}
            </StyledInputLabel>
            <Input 
                required={true}
                value={value}
                placeholder='Enter'
                onChange={handleChange}/>
        </StyledInputContainer>
    )
}

export default StyledInput