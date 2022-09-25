import React from 'react'
import { FormWrapper } from '../../styles'
import BasicDetails from './BasicDetails/BasicDetails'
import PlanDetails from './PlanDetails/PlanDetails'

const Body = ({ formValues, setFormValues }) => {
  return (
    <FormWrapper>
      <PlanDetails
        formValues={formValues}
        setFormValues={setFormValues} />
      <BasicDetails
        formValues={formValues}
        setFormValues={setFormValues} />
    </FormWrapper>
  )
}

export default Body