import styled, { css } from "styled-components";

export const Input = styled.input.attrs(() => ({
    className: 'form-control'
}))`
    ${({theme}) => css`
        margin-bottom: 0px;
        padding: 10px 16px;
        border-style: solid;
        border-width: 1px;
        border-color: #e1e6f0;
        border-radius: 5px;
        font-size: 14px;
        line-height: 20px;
        background-color: ${theme.colors.white.primary};

        :focus {
            box-shadow: 0 0 0 0.25rem ${theme.colors.purple.primary}20;
            border-color: ${theme.colors.purple.primary}50;
            background-color: ${theme.colors.white.primary};
        }
    `}
`