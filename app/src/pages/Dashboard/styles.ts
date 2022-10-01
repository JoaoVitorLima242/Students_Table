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

export const StudentsGrid = styled.div`
    display: grid;
    padding-top: 30px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 4rem;
    width: 100%;
    margin: 0 auto;
`

export const StudentCard = styled(Card)`
    padding: 20px;
    max-width: 400px;
`