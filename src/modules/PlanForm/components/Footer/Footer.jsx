import React from 'react'
import { FooterBtn, FooterContainer } from '../../styles'

const Footer = ({ formValues, current, changeCurrent, stepsData, setFormErrors }) => {

  const handleNextClick = React.useCallback((event) => {
    event.preventDefault()
    setFormErrors(validate(formValues))
    if (current < stepsData[stepsData.length - 1].step) {
      changeCurrent(current + 1)
    }
  }, [current, stepsData, changeCurrent, formValues])

  const validate = React.useCallback(() => {
    const errors = {}
    if(!formValues.email){
      errors.email = "Email is required"
    }
    return errors
  }, [])

  return (
    <FooterContainer>
      <FooterBtn
        disabled={current === stepsData[stepsData.length - 1].step}
        onClick={handleNextClick}>
        Next
      </FooterBtn>
    </FooterContainer>
  )
}

export default Footer