import styled, { css, DefaultTheme } from "styled-components";

const wrapperModifiers = {
    red: (theme: DefaultTheme) => css`
        background: ${theme.colors.red.primary};
    `,
    green: (theme: DefaultTheme) => css`
        background: ${theme.colors.green.primary};
    `
}

export const Button = styled.button`
    ${({theme, color}) => css`
        background: ${theme.colors.purple.primary};
        background-size: 210% 210%;
        background-position: 100% 0;
        transition: all .15s ease;
        box-shadow: none;
        color: #fff;
        margin: 4px 1px;
        border-radius: 0.4285rem;
        border: none;
        padding: 11px 40px;
        width: 100%;

        ${!!color && wrapperModifiers[color](theme)}
    `}
`