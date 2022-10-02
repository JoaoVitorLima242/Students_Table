import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 90px;
    background-color: white;
    border-bottom: 1px solid #e1e6f0;
    display: flex;
    align-items: center;
`

export const LogoContainer = styled.div`
    max-width: 250px;
    margin: 0 30px;
    
    img {
        width: 100%;
    }
`

export const OptionsSection = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 40px;
    font-size: 30px;
    opacity: 0.8;

    h4 {
        margin: 0;
    }
    div {
        margin: 0 10px;
        cursor: pointer;
        :hover {
            opacity: 0.75;
        }
    }
`