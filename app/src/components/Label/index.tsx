import React from 'react'
import { StyledLabel } from './styles'

type LabelProps = {
    children: React.ReactNode
}

const Label = ({ children }: LabelProps) => {
  return <StyledLabel>{children}</StyledLabel>
}

export default Label
