import { ChangeEvent, useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'

// Requests
import { getAddressByCep } from '../../api/Address'
import { uploadImage } from '../../api/Image'
import { getStudentById, updateStudent } from '../../api/Student'
// Types
import { StudentData } from '../../api/Student/types'
// Components
import Button from '../../components/Button'
import Col from '../../components/Col'
import Input from '../../components/Input'
import Label from '../../components/Label'
import Row from '../../components/Row'
import Select from '../../components/Select'
import Alert from '../../components/Alert'
import ButtonIcon from '../../components/ButtonIcon'
// Styles
import * as S from './styles'
// Assets
import Placeholcer from '../../assets/images/personPlaceholder.jpeg'
// Helpers
import { useQuery } from '../../helpers/query'
import Loading from '../../components/Loading'

export const UpdateStudent = () =>{
    const {register, handleSubmit, setValue} = useForm()
    const history = useHistory()
    const query = useQuery()

    const [image, setImage] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const [student, setStudent] = useState<StudentData>(null)

    useEffect(() => {
        const studentId = query.get('studentId') 
        
        const fetchStudent = async (id: string) => {
            const {data, error} = await getStudentById(id)
            
            if (error) history.goBack()

            setValue('picture', data.picture)
            setStudent(data)
        }

        fetchStudent(studentId)
    }, [])

    const onSubmit = async (data: StudentData) => {
        setLoading(true)
        const {error, message} = await updateStudent(student._id ,data)
        setLoading(false)
        if (error) {
            setError(message)
            return
        }
        // history.push('/dashboard')
        console.log(data)
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

    const {
        picture,
        name,
        address
    } = student || {}

    return(
        <S.Wrapper>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
            {
                student ?
                    <>
                    
                        <div>
                            <ButtonIcon onClick={goBackHandler}><FaArrowLeft/></ButtonIcon>
                        </div>
                        <Row>
                            <Col>
                                <h2>Edite o estudante!</h2>
                                <p>Modifique os campos abaixo para editar</p>
                            </Col>
                        </Row>
                        <S.ImageContent>
                            <img src={image || picture} alt='Estudante'/>
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
                                    defaultValue={name}
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
                                    defaultValue={address.cep}
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
                                    defaultValue={address.city}
                                />
                            </Col>
                            <Col>
                                <Label>Estado</Label>
                                <Select 
                                    name='uf'
                                    onChange={fieldsHandler}
                                    register={register('uf')}
                                    placeholder='Estado'
                                    defaultValue={address.uf}
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
                                    register={register('houseNr')}
                                    defaultValue={address.houseNr}

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
                                    defaultValue={address.distric}

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
                                    defaultValue={address.houseNr}
                                />
                            </Col>
                            <Col>
                                <Label>Complemento</Label>
                                <Input  
                                    name='complement'
                                    register={register('complement')}
                                    onChange={fieldsHandler}
                                    placeholder='Complemento'
                                    defaultValue={address.complement}
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
                        <Link to='dashborad'>Voltar</Link>
                    </>
                    : 
                    <S.Loading>
                        <Loading/>
                    </S.Loading>
                }
            </S.Form>
        </S.Wrapper>
    )
}