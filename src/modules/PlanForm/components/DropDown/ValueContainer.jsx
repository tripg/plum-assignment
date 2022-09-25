import * as React from "react"
import { components } from "react-select"

const ValueContainer = ({ children, ...props }) => {
  const { getValue, hasValue } = props
  if (!hasValue) {
    // console.log('propsss',props, children)
    return (
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    )
  }
  const label = getValue()[0]["value"]["label"];
  return (
    <components.ValueContainer className="valueContainer" {...props}>
      <div style={{ textAlign: "start" }} dangerouslySetInnerHTML={label} />
    </components.ValueContainer>
  )
}

export default ValueContainer
