import { FaPlus } from 'react-icons/fa'

// Styles
import * as S from './styles'
// Components
import Search from '../../components/Search'
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom'

const Dashboard = () => {
    const history = useHistory()

    const goTo = (path: string) => history.push(path)

    return (
        <S.Wrapper>
            <S.Interaction>
                <Search 
                    placeholder='Search...'
                />
                <S.ButtonContainer>
                    <Button onClick={() => goTo('/add-student')}>
                       <FaPlus/> ADD
                    </Button>
                </S.ButtonContainer>
            </S.Interaction>
        </S.Wrapper>
    )
}

export default Dashboard