import styled, { css } from "styled-components";

export const Wrapper = styled.main`
    ${({theme}) => css`
        align-items: center;
        display: flex;
        justify-content: center;
        height: calc(100vh - 90px);
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
        max-width: 670px;
        max-height: calc(100vh - 160px);
        overflow-y: scroll;
        width: 100%;
        padding: 30px 20px;
        border: 1px solid #e1e6f0;

        ::-webkit-scrollbar {
            width: 8px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            margin: 8px 0;

        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 8px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #555;
        }


        label {
            font-size: 16px;
        }

        h2 {
            font-size: 2rem;
            line-height: 130%;
            font-weight: 600;
            text-align: center;
            margin-bottom: 10px;
        }

        p {
            text-align: center;
            font-size: 1.2rem;
            opacity: 0.8;
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

export const ImageContent = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin: 10px auto 0;

    img {
        width: 100%;
        height: 100%;
    }
`

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`