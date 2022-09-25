import React from 'react'
import { BodyContainer, MainContainer } from '../../styles'
import Header from '../Header/Header'
import Body from './Body'

const ReviewAndPayment = ({ label, formValues }) => {
  return (
    <BodyContainer>
      <MainContainer>
        <Header label={label} />
        <Body 
          formValues={formValues}/>
      </MainContainer>
    </BodyContainer>
  )
}

export default ReviewAndPayment