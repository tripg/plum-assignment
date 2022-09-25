import React from 'react'
import { BodyContainer, MainContainer } from '../../styles'
import FormPreview from '../FormPreview/FormPreview'
import Header from '../Header/Header'
import Body from './Body'

const ChoosePlan = ({ formErrors, formValues, setFormValues, label, description, setFormErrors }) => {
  return (
    <BodyContainer>
      <MainContainer>
        <Header
          label={label}
          description={description} />
        <Body
          formErrors={formErrors}
          formValues={formValues}
          setFormErrors={setFormErrors}
          setFormValues={setFormValues} />
      </MainContainer>
      <FormPreview
        formValues={formValues}/>
    </BodyContainer>
  )
}

export default ChoosePlan