import { ChangeEvent, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FaArrowLeft } from 'react-icons/fa'

//Requests
import { registerRequest } from '../../api/Auth'
import { UserData } from '../../api/User/type'
// Components
import Alert from '../../components/Alert'
import Button from '../../components/Button'
import ButtonIcon from '../../components/ButtonIcon'
import Col from '../../components/Col'
import Input from '../../components/Input'
import Row from '../../components/Row'
// Styles
import * as S from './styles'
import { getUserByToken, updateUserByToken } from '../../api/User'

const UserConfig = () => {
    const { register, handleSubmit, setValue} = useForm()

    const history = useHistory()

    const [error, setError] = useState('') 
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getUser()
    }, )

    const getUser = async () => {
        const {user} = await getUserByToken()
        setValue('name', user.name)
        setValue('email', user.email)
        setValue('id', user._id)

    }

    const fieldsHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setValue(e.target.name, e.target.value)
    }

    const onSubmit = async (data: UserData) => {
        setLoading(true)
        const {message, error } = await updateUserByToken(data)
        setLoading(false)
        if (error) {
            setError(message)
            return
        }
        
        history.push('/dashboard')
    }

    const goBackHandler = () => {
        history.goBack()
    }

    return (
        <S.Wrapper>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <ButtonIcon onClick={goBackHandler}><FaArrowLeft/></ButtonIcon>
                </div>
                <h2>Editar conta</h2>
                <Input type='hidden' register={register('id')}/>
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
                        <Button>{loading ? '...Editando' : 'Editar'}</Button>
                    </Col>
                </Row>
            </S.Form>
        </S.Wrapper>
    )
}

export default UserConfig