import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'

// Requests
import { getAddressByCep } from '../../api/Address'
import Button from '../../components/Button'
// Components
import Col from '../../components/Col'
import Input from '../../components/Input'
import Label from '../../components/Label'
import Row from '../../components/Row'
// Styles
import * as S from './styles'

export const AddStudent = () =>{
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    const CEPHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        const formatedCEP = e.target.value.replace('-', '')
        if(formatedCEP.length === 8) {
            const response = await getAddressByCep(e.target.value)
        }
    }

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
                        <Input placeholder='Nome do estudante'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Foto</Label>
                        <Input type='file'/>
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
                        <Input register={register('city')} placeholder='Cidade'/>
                    </Col>
                    <Col>
                        <Label>Estado</Label>
                        <Input register={register('uf')} placeholder='Estado'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Rua</Label>
                        <Input register={register('stress')} placeholder='Rua'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Bairro</Label>
                        <Input register={register('distric')} placeholder='Bairro'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Número</Label>
                        <Input register={register('houseNr')} placeholder='Número'/>
                    </Col>
                    <Col>
                        <Label>Complemento</Label>
                        <Input register={register('complement')} placeholder='Complemento'/>
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