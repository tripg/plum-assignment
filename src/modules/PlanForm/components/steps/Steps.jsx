import React from 'react'

import Step from './Step'
import { StepsContainerWrapper, StepsContainer, ProgressContainer, ProgressBar} from '../../styles'

const Steps = ({ current, stepsData, handleSelectStep }) => {

    return (
        <StepsContainerWrapper>
            <StepsContainer>
                {stepsData.map((item, index) => (
                    <Step
                        key={`step-item-${index}`}
                        step={item.step}
                        label={item.label}
                        selected={current}
                        data={item}
                        handleSelectStep={handleSelectStep}/>
                ))}
            </StepsContainer>
            <ProgressContainer>
                <ProgressBar value={current}/>
            </ProgressContainer>
        </StepsContainerWrapper>
    )
}

export default Steps