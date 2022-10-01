import { FaPlus } from 'react-icons/fa'

// Styles
import * as S from './styles'
// Components
import Search from '../../components/Search'
import Button from '../../components/Button'

const Dashboard = () => {
    return (
        <S.Wrapper>
            <S.Interaction>
                <Search 
                    placeholder='Search...'
                />
                <S.ButtonContainer>
                    <Button>
                       <FaPlus/> ADD
                    </Button>
                </S.ButtonContainer>
            </S.Interaction>
        </S.Wrapper>
    )
}

export default Dashboard