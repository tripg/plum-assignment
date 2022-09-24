import React from 'react'
import { BodyContainer, MainContainer } from '../../styles'
import Header from '../Header/Header'
import Body from './Body'

const ReviewAndPayment = ({ label }) => {
  return (
    <BodyContainer>
      <MainContainer>
        <Header label={label} />
        <Body />
      </MainContainer>
    </BodyContainer>
  )
}

export default ReviewAndPayment