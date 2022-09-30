import styled, { css } from "styled-components";
import { Card } from "../../components/Card/styles";

export const Wrapper = styled.main`
    ${({theme}) => css`
        align-items: center;
        display: flex;
        justify-content: center;
        height: 100vh;
        background-color: ${theme.colors.purple.primary};
    `}
`

export const Form = styled.form`
    ${({theme}) => css`
        border-radius: 12px;
        background-color: #fff;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        max-width: 350px;
        min-height: 300px;
        width: 100%;
        padding: 30px 20px;
        margin-bottom: 80px;

        h2 {
            font-size: 28px;
            line-height: 130%;
            font-weight: 600;
            text-align: center;
            margin-bottom: 20px;
        }

        input {
            margin-bottom: 10px;
        }
        a {
            color: ${theme.colors.purple.primary};
            text-align: center;
            display: block;
            margin: 20px auto 0;
            font-size: 14px;
        }
    `}
`