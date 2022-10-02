import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

// Requests
import { getAddressByCep } from '../../api/Address'
import { uploadImage } from '../../api/Image'
import { createStudent } from '../../api/Student'
import Button from '../../components/Button'
// Components
import Col from '../../components/Col'
import Input from '../../components/Input'
import Label from '../../components/Label'
import Row from '../../components/Row'
import Select from '../../components/Select'
// Styles
import * as S from './styles'
import Placeholcer from '../../assets/images/personPlaceholder.jpeg'
import { Link, useHistory } from 'react-router-dom'
import Alert from '../../components/Alert'
import { StudentData } from '../../api/Student/types'
import ButtonIcon from '../../components/ButtonIcon'
import { FaArrowLeft } from 'react-icons/fa'

export const AddStudent = () =>{
    const {register, handleSubmit, setValue} = useForm()
    const history = useHistory()

    const [image, setImage] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data: StudentData) => {
        setLoading(true)
        const {error, message} = await createStudent(data)
        setLoading(false)
        if (error) {
            setError(message)
            return
        }
        history.push('/dashboard')
    }

    const pictureInputHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        const {imageUrl} = await uploadImage(e.target.files[0])
        setImage(imageUrl)
        setValue('picture', imageUrl)
    }   

    const fieldsHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setValue(e.target.name, e.target.value)
    }

    const CEPHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        const formatedCEP = e.target.value.replace('-', '')
        if(formatedCEP.length === 8) {
            const address = await getAddressByCep(e.target.value)
            setValue('cep', formatedCEP)
            setValue('city', address.localidade)
            setValue('uf', address.uf)
            setValue('street', address.logradouro)
            setValue('distric', address.bairro)
        }
    }

    const goBackHandler = () => {
        history.goBack()
    }

    const UFs = ['AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
    ]

    return(
        <S.Wrapper>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <ButtonIcon onClick={goBackHandler}><FaArrowLeft/></ButtonIcon>
                </div>
                <Row>
                    <Col>
                        <h2>Adicione um estudante!</h2>
                        <p>Complete todos os campos do formulário para criar.</p>
                    </Col>
                </Row>
                <S.ImageContent>
                    <img src={image || Placeholcer} alt='Estudante'/>
                </S.ImageContent>
                <Row>
                    <Col>
                        <Label>Foto</Label>
                        <Input 
                            type='file'
                            onChange={pictureInputHandler}
                            name='picture'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Nome</Label>
                        <Input 
                            placeholder='Nome do estudante'
                            name='name'
                            register={register('name')}
                            onChange={fieldsHandler}
                        />
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <Label>CEP</Label>
                        <Input 
                            onChange={CEPHandler} 
                            register={register('cep')}
                            placeholder='00000-000'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Cidade</Label>
                        <Input 
                            name='uf'
                            onChange={fieldsHandler}
                            register={register('city')}
                            placeholder='Cidade' 
                        />
                    </Col>
                    <Col>
                        <Label>Estado</Label>
                        <Select 
                            name='uf'
                            onChange={fieldsHandler}
                            register={register('uf')}
                            placeholder='Estado'
                        >
                             <option value=''>--Estado---</option>
                            {UFs.map(uf => (
                                <option key={uf} value={uf}>{uf}</option>
                            ))}
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Rua</Label>
                        <Input
                            name='street'
                            onChange={fieldsHandler}
                            placeholder='Rua'
                            register={register('street')}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Bairro</Label>
                        <Input 
                            name='distric'
                            register={register('distric')}
                            onChange={fieldsHandler}
                            placeholder='Bairro'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Número</Label>
                        <Input 
                            placeholder='Número'
                            name='houseNr'
                            register={register('houseNr')}
                            onChange={fieldsHandler}
                        />
                    </Col>
                    <Col>
                        <Label>Complemento</Label>
                        <Input  
                            name='complement'
                            register={register('complement')}
                            onChange={fieldsHandler}
                            placeholder='Complemento'
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
                <Link to='dashborad'>Voltar</Link>
            </S.Form>
        </S.Wrapper>
    )
}