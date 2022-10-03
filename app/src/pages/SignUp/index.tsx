import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

// Components
import { Link, useHistory } from 'react-router-dom'
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
    const { register, handleSubmit, setValue} = useForm()

    const history = useHistory()

    const [error, setError] = useState('') 
    const [loading, setLoading] = useState(false)

    const fieldsHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setValue(e.target.name, e.target.value)
    }

    const onSubmit = async (data: RegisterData) => {
        console.log(data)

        setLoading(true)
        const {message, error, token } = await registerRequest(data)
        if (error) {
            setError(message)
            return
        }
        
        cookies.set('auth-token', token, {expires: 86400})
        setTimeout(() => history.push('/dashboard') , 1 * 100)
        setLoading(false)
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
                            onChange={fieldsHandler}
                            name='name'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input
                            placeholder='Email'
                            register={register('email')}
                            type='email'
                            onChange={fieldsHandler}
                            name='email'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input 
                            placeholder='Senha'
                            register={register('password')}
                            type='password'
                            onChange={fieldsHandler}
                            name='password'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input 
                            placeholder='Confirmar senha'
                            register={register('confirmPassword')}
                            type='password'
                            onChange={fieldsHandler}
                            name='confirmPassword'
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
                        <Link to='/'>Ja tem uma conta?<br/> Acesse nosso app</Link>
                    </Col>
                </Row>
            </S.Form>
        </S.Wrapper>
    )
}

export default SignUp