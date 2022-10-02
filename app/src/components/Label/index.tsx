import React from 'react'
import { RequiredStar, StyledLabel } from './styles'

type LabelProps = {
    children: React.ReactNode
    required?: boolean
}

const Label = ({ children, required }: LabelProps) => {
  return <StyledLabel>
      {children}
      {required && <RequiredStar>*</RequiredStar>}
    </StyledLabel>
}

export default Label
