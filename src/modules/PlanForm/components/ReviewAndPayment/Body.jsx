import React from 'react'
import { Container, FormPreviewDetails, FormWrapper } from '../../styles'
import FormPreviewText from '../Common/FormPreviewText'

const Body = () => {
  return (
    <FormWrapper>
      <Container>
        <FormPreviewDetails>
          <FormPreviewText label={'Plan Selected'} />
          <FormPreviewText label={'Mobile Number'} />
          <FormPreviewText label={'Amount'} />
          <FormPreviewText label={'Pincode'} />
          <FormPreviewText label={'State'} />
        </FormPreviewDetails>
      </Container>
    </FormWrapper>
  )
}

export default Body