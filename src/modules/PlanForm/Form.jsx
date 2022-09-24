import React from 'react'
import {stepsData} from '../constants/data'
import Footer from './components/Footer/Footer'
import Steps from './components/steps/Steps'
import { FormContainer } from './styles'

const Form = () => {
  const [current, setCurrent] = React.useState(1)

    const handleSelectStep = React.useCallback((newStep) => {
        if (newStep !== current) {
            setCurrent(newStep)
        }
    }, [current])

  return (
    <FormContainer>
      <Steps
        current={current}
        stepsData={stepsData}
        handleSelectStep={handleSelectStep} />
      {stepsData.map((item, index) => (
        item.step === current && (
          <item.component key={`step-component-${index}`} label={item.label} description={item.description}/>
        ) || <React.Fragment key={`blank-component-${index}`} />
      ))}
      <Footer />
    </FormContainer>
  )
}

export default Form