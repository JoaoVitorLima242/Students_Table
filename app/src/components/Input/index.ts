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
        background-color: #f8f9fb;
        font-size: 14px;
        line-height: 20px;
    `}
`