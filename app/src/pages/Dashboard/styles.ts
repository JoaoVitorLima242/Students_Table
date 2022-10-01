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
    grid-template-columns: repeat(auto-fit, minmax(320px, 450px));
    grid-gap: 2rem;
    width: 100%;
    margin: 0 auto;
`

export const StudentCard = styled(Card)`
    padding: 20px;    

    display: flex;
    flex-direction: row;
`

export const ImageContent = styled.div`
    max-width: 150px;
    max-height: 150px;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
    }
`

export const Infos = styled.div`
    padding-left: 10px;
    margin-left: 10px;
    border-left: 1px solid #e1e6f0;
    flex: 1;
`

export const InfoWithIcon = styled.div`
    opacity: 0.6;
    font-size: 14px;
    
    p {
        margin-bottom: 5px;
    }

    span {
        margin-left: 4px;
    }
`

export const ButtonsIconsContainer = styled.div`
    display: flex;
`