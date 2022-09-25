import React from 'react'
import { Container, FormPreviewDetails, FormWrapper } from '../../styles'
import FormPreviewText from '../Common/FormPreviewText'

const Body = ({ formValues }) => {
  return (
    <FormWrapper>
      <Container>
        <FormPreviewDetails>
          <FormPreviewText label={'Plan Selected'} value={formValues.planType} />
          <FormPreviewText label={'Mobile Number'} value={formValues.mobileNumber} />
          <FormPreviewText label={'Amount'} value={formValues.amount} />
          <FormPreviewText label={'Pincode'} value={formValues.pinCode} />
          <FormPreviewText label={'State'} value={formValues.state} />
        </FormPreviewDetails>
      </Container>
    </FormWrapper>
  )
}

export default Body