import React from 'react'
import { StyledPreviewContainer, StyledPreviewText } from '../../styles'

const FormPreviewText = ({label,value}) => {
    return (
        <StyledPreviewContainer>
            <StyledPreviewText>
                {label}
            </StyledPreviewText>
            <StyledPreviewText>
                {value || '-'}
            </StyledPreviewText>
        </StyledPreviewContainer>
    )
}

export default FormPreviewText