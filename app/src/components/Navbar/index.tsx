import { useEffect, useState } from 'react'
import { FaCog, FaSignOutAlt } from 'react-icons/fa'
import { useHistory, useLocation } from 'react-router-dom'

// Styles
import * as S from './styles'
// Images
import Logo from '../../assets/images/myLogo.png'
// Helpers
import cookies, { isAuthenticated } from '../../helpers/cookies'

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

    const goTo = (path: string) => history.push(path)

    if (!(!!isAuth)) return null

    return (
        <S.Wrapper>
            <S.LogoContainer onClick={() => goTo('/dashboard')}>
                <img src={Logo} alt='A mountain with a group of people inside. Next to is write Good Dashboard'/>
            </S.LogoContainer>
                <S.OptionsSection>
                    <div onClick={() => goTo('/config')}><FaCog /></div>
                    <div onClick={logOutHandler}><FaSignOutAlt /></div>
                </S.OptionsSection>
        </S.Wrapper>
    )
}

export default Navbar