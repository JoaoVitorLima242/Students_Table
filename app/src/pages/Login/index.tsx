// Components
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Col from '../../components/Col'
import { Input } from '../../components/Input'
import Row from '../../components/Row'
// Styles
import * as S from './styles'

const Login = () => {
    return (
        <S.Wrapper>
            <S.Form>
                <h2>Log In</h2>
                <Row>
                    <Col>
                        <Input placeholder='Email'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input placeholder='Password'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button>Log In</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to='/'>Sem conta? Criar um conta.</Link>
                    </Col>
                </Row>
            </S.Form>
        </S.Wrapper>
    )
}

export default Login