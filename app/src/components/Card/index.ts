import styled, { css } from "styled-components";

export const Card = styled.div.attrs(() => ({
    className: 'card'
}))`
    ${({theme}) => css`
        border: 0;
        position: relative;
        background-color: ${theme.colors.dark.secondary};
    `}
`