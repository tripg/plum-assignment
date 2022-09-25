import React, { useState } from 'react'
import { useEffect } from 'react'
import { FooterBtn, FooterContainer } from '../../styles'

const Footer = ({ formValues, current, changeCurrent, stepsData, setFormErrors, formErrors }) => {
  const [isNext, setIsNext] = useState(false)

  const handleNextClick = React.useCallback((event) => {
    event.preventDefault()
    setFormErrors(validate(formValues))
    // if (current < stepsData[stepsData.length - 1].step) {
    //   changeCurrent(current + 1)
    // }
    setIsNext(true)
  }, [current, stepsData, changeCurrent, formValues])

  const validate = React.useCallback(() => {
    const errors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/
    const pinCodeRegex = /^(\d{4}|\d{6})$/
    if(!formValues.email){
      errors.email = "Email is required"
    }else if(!emailRegex.test(formValues.email)){
      errors.email = "Please enter a valid email address"
    }
    if(!formValues.mobileNumber){
      errors.mobileNumber = "Mobile Number is required"
    }
    else if(!mobileRegex.test(formValues.mobileNumber)){
      errors.mobileNumber = "Please enter a valid mobile number"
    }
    if(!formValues.address1){
      errors.address1 = "Address is required"
    }
    if(!formValues.pinCode){
      errors.pinCode = "Pincode is required"
    }
    else if(!pinCodeRegex.test(formValues.pinCode)){
      errors.pinCode = "Please enter a valid pincode"
    }
    if(!formValues.state){
      errors.state = "State is required"
    }
    if(!formValues.planType){
      errors.planType = "Please select a plan type"
    }
    return errors
  }, [formValues])

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isNext){
      if (current < stepsData[stepsData.length - 1].step) {
        changeCurrent(current + 1)
      }
    }
  }, [formErrors, formValues])

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