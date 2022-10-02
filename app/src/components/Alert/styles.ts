import styled, { css, DefaultTheme } from 'styled-components'
import { StyledAlertProps } from './types'

const wrapperModifiers = {
  danger: (theme: DefaultTheme) => css`
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
        color: ${theme.colors.purple.primary};
        background-color: ${theme.colors.purple.secondary};
        border-color: ${theme.colors.purple.primary};
        font-weight: 500;

        p {
            margin: 0;
        }
        ${!!type && wrapperModifiers[type](theme)}
    `}
`

