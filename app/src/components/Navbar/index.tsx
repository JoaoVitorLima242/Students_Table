import { FaCog, FaSignOutAlt } from 'react-icons/fa'

// Styles
import * as S from './styles'
// Images
import Logo from '../../assets/images/myLogo.png'
import cookies, { isAuthenticated } from '../../helpers/cookies'
import { useHistory, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const history= useHistory()
    const location = useLocation()

    const [isAuth, setIsAuth] = useState(isAuthenticated())

    const logOutHandler = () => {
        cookies.remove('auth-token')
        history.push('/login')
    }

    useEffect(() => {
        setIsAuth(isAuthenticated())
    }, [location])

    if (!(!!isAuth)) return null

    return (
        <S.Wrapper>
            <S.LogoContainer>
                <img src={Logo} alt='A mountain with a group of people inside. Next to is write Good Dashboard'/>
            </S.LogoContainer>
                <S.OptionsSection>
                    <div><FaCog /></div>
                    <div onClick={logOutHandler}><FaSignOutAlt /></div>
                </S.OptionsSection>
        </S.Wrapper>
    )
}

export default Navbar