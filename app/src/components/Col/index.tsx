import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
  size?: string
  children?: ReactNode
}

const Col = ({ size, children }: Props) => {
  return <S.Wrapper className={size ? `col-md-${size}` : 'col'}>{children}</S.Wrapper>
}

export default Col
