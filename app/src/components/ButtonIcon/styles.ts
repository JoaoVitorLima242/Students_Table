import styled, { css, DefaultTheme } from "styled-components";

type StyledButtonProps = {
    color: string
}

const wrapperModifiers = {
    green: (theme: DefaultTheme) => css`
        color: ${theme.colors.green.primary};
        background-color: ${theme.colors.green.secondary};
    `,
    red: (theme: DefaultTheme) => css`
        color: ${theme.colors.red.primary};
        background-color: ${theme.colors.red.secondary};
    `,
}

export const Button = styled.button<StyledButtonProps>`
    ${({theme, color}) => css`
        color: ${theme.colors.purple.primary};
        background-color: ${theme.colors.purple.secondary};
        border-radius: 50%;
        width: 40px;
        height: 40px;
        border: none;

        ${!!color && wrapperModifiers[color](theme)}
    `}
`