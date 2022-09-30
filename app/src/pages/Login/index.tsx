import { useForm } from 'react-hook-form'

// Components
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Col from '../../components/Col'
import Input from '../../components/Input'
import Row from '../../components/Row'
// Styles
import * as S from './styles'

const Login = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => console.log(data)

    return (
        <S.Wrapper>
            <S.Form>
                <h2>Log In</h2>
                <Row>
                    <Col>
                        <Input 
                            placeholder='Email'
                            register={register('email')}
                            type='email'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input 
                            placeholder='Senha'
                            register={register('password')}
                            type='password'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button>Log In</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to='/signup'>Sem conta? Criar um conta.</Link>
                    </Col>
                </Row>
            </S.Form>
        </S.Wrapper>
    )
}

export default Login