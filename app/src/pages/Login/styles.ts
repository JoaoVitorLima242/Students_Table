import styled from "styled-components";
import { Card } from "../../components/Card";

export const Wrapper = styled.main`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100vh;
`

export const Form = styled(Card)`
    max-width: 450px;
    min-height: 300px;
    width: 100%;
    padding: 30px 20px;
    margin-bottom: 80px;

    h2 {
        text-align: center;
        margin: 5px 0 35px;
    }

    input {
        margin-bottom: 20px;
    }
`