import React from 'react'
import { FormWrapper } from '../../styles'
import BasicDetails from './BasicDetails/BasicDetails'
import PlanDetails from './PlanDetails/PlanDetails'

const Body = () => {
  return (
    <FormWrapper>
        <PlanDetails/>
        <BasicDetails/> 
    </FormWrapper>
  )
}

export default Body