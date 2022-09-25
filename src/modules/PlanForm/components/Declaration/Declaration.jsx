import React from 'react'
import { BodyContainer, MainContainer } from '../../styles'
import FormPreview from '../FormPreview/FormPreview'
import Header from '../Header/Header'
import Body from './Body'

const Declaration = ({ label, formValues }) => {
  return (
    <BodyContainer>
      <MainContainer>
        <Header label={label} />
        <Body />
      </MainContainer>
      <FormPreview
        formValues={formValues} />
    </BodyContainer>
  )
}

export default Declaration