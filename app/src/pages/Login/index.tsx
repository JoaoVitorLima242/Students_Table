import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'

// Requests
import { logInRequest } from '../../api/Auth'
import { LoginData } from '../../api/Auth/types'
// Components
import Alert from '../../components/Alert'
import Button from '../../components/Button'
import Col from '../../components/Col'
import Input from '../../components/Input'
import Row from '../../components/Row'
// Helpers
import cookies from '../../helpers/cookies'
// Styles
import * as S from './styles'

const Login = () => {
    const { register, handleSubmit } = useForm()

    let history = useHistory();


    const [error, setError] = useState('') 
    const [loading, setLoading] = useState(false) 

    const onSubmit = async (data: LoginData) => {
        setLoading(true)
        const {message, error, token } = await logInRequest(data)
        setLoading(false)

        if (error) {
            setError(message)
            setTimeout(() => setError('') , 3 * 1000)
            return
        }
        
        cookies.set('auth-token', token, {expires: 86400})
        history.push('/dashboard')
    }

    return (
        <S.Wrapper>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <h2>Acesse o Dashboard</h2>
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
                        <Link to='/signup'>Sem conta? Criar um conta.</Link>
                    </Col>
                </Row>
            </S.Form>
        </S.Wrapper>
    )
}

export default Login