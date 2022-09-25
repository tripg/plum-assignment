import React from 'react'
import { BodyContainer, MainContainer } from '../../styles'
import FormPreview from '../FormPreview/FormPreview'
import Header from '../Header/Header'
import Body from './Body'

const ChoosePlan = ({ formValues, setFormValues, label, description }) => {
  return (
    <BodyContainer>
      <MainContainer>
        <Header
          label={label}
          description={description} />
        <Body
          formValues={formValues}
          setFormValues={setFormValues} />
      </MainContainer>
      <FormPreview
        formValues={formValues}/>
    </BodyContainer>
  )
}

export default ChoosePlan