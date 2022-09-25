import React, { useState } from 'react'
import { BodyCollapse, Container, SliderContainer, SliderLabel } from '../../styles'
import Title from '../Common/Title'
import StyledSlider from './StyledSlider'
import "./slider.css";

const AmountSlider = ({formValues, setFormValues}) => {
    const marks = ["₹1L", "₹2L", "₹3L", "₹4L", "₹5L"]
    const [value, setValue] = useState(0)
    const [expanded, setExpanded] = useState(true)

    const handleClick = React.useCallback(() => {
        setExpanded(!expanded)
    }, [expanded])

    const handleChange = React.useCallback((v) => {
        const newValue = (v / 100) * 5
        setValue(v)
        setFormValues({...formValues, amount: newValue})
    }, [formValues, setFormValues])

    return (
        <Container>
            <Title
                title={'Self (Individual)'}
                expanded={expanded}
                handleClick={handleClick} />
            <BodyCollapse in={expanded}>
                <SliderLabel>
                    Sum insured of ₹20,00,000 with a deductible of ₹3,00,000
                </SliderLabel>
                <SliderContainer>
                    <StyledSlider
                        marks={marks}
                        value={value}
                        min={0}
                        max={100}
                        onChange={handleChange} />
                </SliderContainer>
            </BodyCollapse>
        </Container>
    )
}

export default AmountSlider