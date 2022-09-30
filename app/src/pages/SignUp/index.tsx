// Components
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Col from '../../components/Col'
import { Input } from '../../components/Input'
import Row from '../../components/Row'
// Styles
import * as S from './styles'

const SignUp = () => {
    return (
        <S.Wrapper>
            <S.Form>
                <h2>Criar conta</h2>
                <Row>
                    <Col>
                        <Input placeholder='Nome'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input placeholder='Email'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input placeholder='Senha'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input placeholder='Confirmar senha'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button>Criar</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to='/'>Ja tem uma conta?<br/> Acesse no app</Link>
                    </Col>
                </Row>
            </S.Form>
        </S.Wrapper>
    )
}

export default SignUp