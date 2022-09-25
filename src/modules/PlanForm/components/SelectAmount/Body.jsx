import React from 'react'
import { amountConsent } from '../../../constants/data'
import { FormWrapper } from '../../styles'
import StyledCheckbox from '../Common/StyledCheckbox'
import AmountSlider from './AmountSlider'

const Body = ({formValues, setFormValues}) => {
  return (
    <FormWrapper>
        <AmountSlider
          formValues={formValues}
          setFormValues={setFormValues} />
        <StyledCheckbox label={amountConsent}/>
    </FormWrapper>
  )
}

export default Body