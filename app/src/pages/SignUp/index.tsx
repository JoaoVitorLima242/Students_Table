import { useState } from 'react'
import { useForm } from 'react-hook-form'

// Components
import { Link } from 'react-router-dom'
import { registerRequest } from '../../api/Auth'
import { RegisterData } from '../../api/Auth/types'
import Alert from '../../components/Alert'
import Button from '../../components/Button'
import Col from '../../components/Col'
import Input from '../../components/Input'
import Row from '../../components/Row'
import cookies from '../../helpers/cookies'
// Styles
import * as S from './styles'

const SignUp = () => {
    const { register, handleSubmit } = useForm()

    const [error, setError] = useState('') 
    const [loading, setLoading] = useState(false) 

    const onSubmit = async (data: RegisterData) => {
        setLoading(true)
        const {message, error, token } = await registerRequest(data)
        setLoading(false)
        if (error) {
            setError(message)
            return
        }

        console.log(token)
        
        cookies.set('auth-token', token, {expires: 86400})
    }

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
                { error &&
                    <Alert type='danger'>
                        {error}
                    </Alert>
                }
                <Row>
                    <Col>
                        <Button>{loading ? '...Criando' : 'Criar'}</Button>
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