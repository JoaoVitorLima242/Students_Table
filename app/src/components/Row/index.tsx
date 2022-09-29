import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
  size?: string
  children?: ReactNode
}

const Row = ({ size, children }: Props) => {
  return <S.Wrapper className={size ? `row-md-${size}` : 'row'}>{children}</S.Wrapper>
}

export default Row
