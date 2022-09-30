import { Wrapper } from './styles'
import { AlertProps } from './types'

const Alert = ({ children = '', type }: AlertProps) => {
  return (
    <Wrapper
      type={type}
    >
      {children}
    </Wrapper>
  )
}

export default Alert
