import styled, { css } from "styled-components";

export const Input = styled.input.attrs(() => ({
    className: 'form-control'
}))`
    ${({theme}) => css`
        border: ${theme.colors.blue.darker} 2px solid;
        position: relative;
        background-color: ${theme.colors.dark.secondary};
        color: ${theme.colors.font.primary} !important;
        
        :focus {
            background-color: transparent;
            border-color: ${theme.colors.blue.darker};
            box-shadow: 0 0 0 0.15rem ${theme.colors.blue.darker};
        }
    `}
`