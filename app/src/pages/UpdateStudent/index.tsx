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

            const {
                picture,
                name,
                address
            } = data

            setValue('name', name)
            setValue('picture', picture)
            setValue('cep', address.cep)
            setValue('city', address.city)
            setValue('uf', address.uf)
            setValue('street', address.street)
            setValue('distric', address.distric)
            setValue('complement', address.complement)
            setValue('houseNr', address.houseNr)

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

    const {
        picture,
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
                                <Label required>Foto</Label>
                                <Input 
                                    type='file'
                                    onChange={pictureInputHandler}
                                    name='picture'
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label required>Nome</Label>
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
                                <Label required>CEP</Label>
                                <Input 
                                    onChange={CEPHandler} 
                                    register={register('cep')}
                                    placeholder='00000-000'
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label required>Cidade</Label>
                                <Input 
                                    name='uf'
                                    onChange={fieldsHandler}
                                    register={register('city')}
                                    placeholder='Cidade' 
                                />
                            </Col>
                            <Col>
                                <Label required>Estado</Label>
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
                                <Label required>Rua</Label>
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
                                <Label required>Bairro</Label>
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
                                <Label required>N??mero</Label>
                                <Input 
                                    placeholder='N??mero'
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