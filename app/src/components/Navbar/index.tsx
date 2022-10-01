import * as S from './styles'

// Images
import Logo from '../../assets/images/myLogo.png'

const Navbar = () => {
    return (
        <S.Wrapper>
            <S.LogoContainer>
                <img src={Logo} alt='A mountain with a group of people inside. Next to is write Good Dashboard'/>
            </S.LogoContainer>
            <S.OptionsSection>
            </S.OptionsSection>
        </S.Wrapper>
    )
}

export default Navbar