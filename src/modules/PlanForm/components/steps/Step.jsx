import React from 'react'

import { StepContainer, StepLabel } from '../../styles'

const Step = ({ step, label, selected, data, handleSelectStep }) => {

    const handleOnClick = React.useCallback(() => {
        handleSelectStep(step)
    }, [handleSelectStep, step])

    return (
        <StepContainer onClick={handleOnClick}>
            <StepLabel selected={selected === step}>
                {step}: {label}
            </StepLabel>
        </StepContainer>
    )
}

export default Step
