// Components
import Button from '../../components/Button'
import Col from '../../components/Col'
import { Input } from '../../components/Input'
import Label from '../../components/Label'
import Row from '../../components/Row'
// Styles
import * as S from './styles'

const Login = () => {
    return (
        <S.Wrapper>
            <S.Form>
                <h2>LOGIN</h2>
                <Row>
                    <Col>
                        <Label>Email</Label>
                        <Input placeholder='Coloque aqui a seu email'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Senha</Label>
                        <Input placeholder='Coloque aqui a sua senha'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button>Log In</Button>
                    </Col>
                </Row>
            </S.Form>
        </S.Wrapper>
    )
}

export default Login