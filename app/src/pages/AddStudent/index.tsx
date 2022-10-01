import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'

// Requests
import { getAddressByCep } from '../../api/Address'
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

export const AddStudent = () =>{
    const {register, handleSubmit, setValue} = useForm()

    const onSubmit = (data) => {
        createStudent(data)
    }

    const CEPHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        const formatedCEP = e.target.value.replace('-', '')
        if(formatedCEP.length === 8) {
            const address = await getAddressByCep(e.target.value)
            setValue('city', address.localidade)
            setValue('uf', address.uf)
            setValue('street', address.logradouro)
            setValue('distric', address.bairro)
        }
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
                <Row>
                    <Col>
                        <h2>Adicione um estudante!</h2>
                        <p>Complete todos os campos do formulário para criar.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Nome</Label>
                        <Input 
                            placeholder='Nome do estudante'
                            register={register('name')}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Foto</Label>
                        <Input 
                            type='file'
                            register={register('picture')}
                        />
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <Label>CEP</Label>
                        <Input onChange={CEPHandler} register={register('cep')} placeholder='00000-000'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Cidade</Label>
                        <Input 
                            register={register('city')} 
                            placeholder='Cidade' 
                        />
                    </Col>
                    <Col>
                        <Label>Estado</Label>
                        <Select 
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
                            register={register('street')} 
                            placeholder='Rua'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Bairro</Label>
                        <Input 
                            register={register('distric')} 
                            placeholder='Bairro'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Número</Label>
                        <Input 
                            register={register('houseNr')} 
                            placeholder='Número'
                        />
                    </Col>
                    <Col>
                        <Label>Complemento</Label>
                        <Input  
                            register={register('complement')} 
                            placeholder='Complemento'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button>Criar</Button>
                    </Col>
                </Row>
            </S.Form>
        </S.Wrapper>
    )
}