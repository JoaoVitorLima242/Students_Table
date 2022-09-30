import { useForm } from 'react-hook-form'

// Components
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Col from '../../components/Col'
import Input from '../../components/Input'
import Row from '../../components/Row'
// Styles
import * as S from './styles'

const SignUp = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => console.log(data)

    return (
        <S.Wrapper>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <h2>Criar conta</h2>
                <Row>
                    <Col>
                        <Input 
                            placeholder='Nome'
                            register={register('name')}
                        />
                    </Col>
                </Row>
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
                        <Input 
                            placeholder='Confirmar senha'
                            register={register('confirmPassword')}
                            type='password'
                        />
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