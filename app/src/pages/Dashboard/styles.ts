import styled from "styled-components";
import { Card } from '../../components/Card/styles'

export const Wrapper = styled.div`
    height: calc(100vh - 90px);
    padding: 2rem;
`

export const Interaction = styled(Card)`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: row;
`

export const ButtonContainer = styled.div`
    margin-left: 10px;

    button {
        height: 100%;
        margin: 0;
        display: flex;
        align-items: center;
        svg {
            margin-right: 4px;
        }
    }
`