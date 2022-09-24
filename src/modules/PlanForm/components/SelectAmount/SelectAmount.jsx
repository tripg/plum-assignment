import React from 'react'
import { BodyContainer, MainContainer } from '../../styles'
import FormPreview from '../FormPreview/FormPreview'
import Header from '../Header/Header'
import Body from './Body'

const SelectAmount = ({ label, description }) => {
  return (
    <BodyContainer>
      <MainContainer>
        <Header
          label={label}
          description={description} />
        <Body />
      </MainContainer>
      <FormPreview />
    </BodyContainer>
  )
}

export default SelectAmount