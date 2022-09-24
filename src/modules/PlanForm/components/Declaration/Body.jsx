import React from 'react'
import { declarationData } from '../../../constants/data'
import { FormWrapper } from '../../styles'
import StyledCheckbox from '../Common/StyledCheckbox'

const Body = () => {
  return (
    <FormWrapper>
        {declarationData.map((item,index)=>(
            <StyledCheckbox 
                key={`item-${index}`}
                label={item.label} />
        ))}
    </FormWrapper>
  )
}

export default Body