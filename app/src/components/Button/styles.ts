import styled, { css } from "styled-components";

export const Button = styled.button`
    ${({theme}) => css`
        background: ${theme.colors.blue.primary};
        background-image: ${theme.colors.blue.backgroundLinear};
        background-size: 210% 210%;
        background-position: 100% 0;
        background-color: #e14eca;
        transition: all .15s ease;
        box-shadow: none;
        color: #fff;
        margin: 4px 1px;
        border-radius: 0.4285rem;
        border-color: ${theme.colors.blue.primary};
        padding: 11px 40px;
        width: 100%;
    `}
`