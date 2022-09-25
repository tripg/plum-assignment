import React from 'react'
import { ErrorText, Input, StyledInputContainer, StyledInputLabel } from '../../styles'

const StyledInput = ({label, value, handleChange, error}) => {
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
            {error && 
                <ErrorText>{error}</ErrorText>
            }
        </StyledInputContainer>
    )
}

export default StyledInput