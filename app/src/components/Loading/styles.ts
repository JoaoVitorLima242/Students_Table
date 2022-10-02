import styled, { css } from "styled-components";

export const Loader = styled.div`
    ${({theme}) => css`
        width: 120px;
        height: 120px;
        border-top: 4px solid ${theme.colors.purple.primary};
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    
        @keyframes spin {
            0% {
            transform: rotate(0deg);
            }
            100% {
            transform: rotate(360deg);
            }
        }
    `}

`