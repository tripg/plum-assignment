import React from 'react'
import { FormWrapper } from '../../styles'
import BasicDetails from './BasicDetails/BasicDetails'
import PlanDetails from './PlanDetails/PlanDetails'

const Body = ({ formErrors,formValues, setFormValues, setFormErrors }) => {
  return (
    <FormWrapper>
      <PlanDetails
        formErrors={formErrors}
        formValues={formValues}
        setFormValues={setFormValues}
        setFormErrors={setFormErrors} />
      <BasicDetails
        setFormErrors={setFormErrors}
        formErrors={formErrors}
        formValues={formValues}
        setFormValues={setFormValues} />
    </FormWrapper>
  )
}

export default Body