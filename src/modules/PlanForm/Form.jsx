import React from 'react'
import { useState } from 'react'
import { stepsData } from '../constants/data'
import Footer from './components/Footer/Footer'
import Steps from './components/steps/Steps'
import { FormContainer } from './styles'

const Form = () => {
  const [current, setCurrent] = useState(1)
  const initialValues = { email: "", mobileNumber: "", address1: "", address2: "", pinCode: "", state: "", amount: "", planType: "" }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})

  const handleSelectStep = React.useCallback((newStep) => {
    if (newStep !== current) {
      setCurrent(newStep)
    }
  }, [current])

  return (
    <FormContainer>
      <Steps
        current={current}
        stepsData={stepsData}
        handleSelectStep={handleSelectStep} />
      {stepsData.map((item, index) => (
        item.step === current && (
          <item.component
            key={`step-component-${index}`}
            label={item.label}
            description={item.description}
            formValues={formValues}
            setFormValues={setFormValues} />
        ) || <React.Fragment key={`blank-component-${index}`} />
      ))}
      <Footer
        formValues={formValues}
        setFormErrors={setFormErrors}
        current={current}
        changeCurrent={handleSelectStep}
        stepsData={stepsData} />
    </FormContainer>
  )
}

export default Form