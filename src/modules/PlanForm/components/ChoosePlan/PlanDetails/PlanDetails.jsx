import React from 'react'

import { Container, BodyCollapse } from '../../../styles'
import PlanType from './PlanType'
import Title from '../../Common/Title'

const PlanDetails = ({formValues, setFormValues}) => {
    const [expanded, setExpanded] = React.useState(true)

    const handleClick = React.useCallback(() => {
        setExpanded(!expanded)
    }, [expanded])

    return (
        <Container>
            <Title
                title={'Plan Details'}
                expanded={expanded}
                handleClick={handleClick} />
            <BodyCollapse in={expanded}>
                <PlanType 
                    formValues={formValues}
                    setFormValues={setFormValues}/>
            </BodyCollapse>
        </Container>
    )
}

export default PlanDetails