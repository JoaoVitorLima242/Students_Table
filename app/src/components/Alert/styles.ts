import styled, { css } from 'styled-components'
import { StyledAlertProps } from './types'

const wrapperModifiers = {
  danger: () => css`
        color: #842029;
        background-color: #f8d7da;
        border-color: #f5c2c7;
    `
}

export const Wrapper = styled.div.attrs(() => ({
  className: 'alert'
}))<StyledAlertProps>`
    ${({ theme, type }) => css`
        text-align: center;

        p {
            margin: 0;
        }
        ${!!type && wrapperModifiers[type]}
    `}
`

