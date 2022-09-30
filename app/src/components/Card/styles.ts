import styled, { css } from "styled-components";

export const Card = styled.div.attrs(() => ({
    className: 'card'
}))`
    ${({theme}) => css`
        background-color: #fff;
        font-family: Inter, sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    `}
`