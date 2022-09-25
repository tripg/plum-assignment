import React from 'react'
import { BodyContainer, MainContainer } from '../../styles'
import FormPreview from '../FormPreview/FormPreview'
import Header from '../Header/Header'
import Body from './Body'

const SelectAmount = ({ label, formValues, setFormValues, description }) => {
  return (
    <BodyContainer>
      <MainContainer>
        <Header
          label={label}
          description={description} />
        <Body 
          formValues={formValues}
          setFormValues={setFormValues}/>
      </MainContainer>
      <FormPreview 
        formValues={formValues}/>
    </BodyContainer>
  )
}

export default SelectAmount