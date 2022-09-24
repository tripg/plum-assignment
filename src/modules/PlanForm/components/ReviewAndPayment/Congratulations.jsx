import React from 'react'
import { BodyContainer, MainContainer } from '../../styles'
import Header from '../Header/Header'
import Body from './Body'

const Congratulations = ({}) => {
  return (
    <BodyContainer>
      <MainContainer>
        <Header label={'Congratulations'} />
        <Body />
      </MainContainer>
    </BodyContainer>
  )
}

export default Congratulations