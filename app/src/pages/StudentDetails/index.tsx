import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import 'moment-timezone';
import moment from 'moment'
import {FaArrowLeft} from 'react-icons/fa'

// Request
import { getStudentById } from '../../api/Student'
import { StudentData } from '../../api/Student/types'
// Components
import ButtonIcon from '../../components/ButtonIcon'
import Col from '../../components/Col'
import Label from '../../components/Label'
import Loading from '../../components/Loading'
import Row from '../../components/Row'
// Styles
import * as S from './styles'
// Helpers
import { useQuery } from '../../helpers/query';

const StudentDetails = () => {
    const query = useQuery();

    const history = useHistory()

    const [student, setStudent] = useState<StudentData>(null)

    useEffect(() => {
        const studentId = query.get('studentId') 
        
        const fetchStudent = async (id: string) => {
            const {data, error} = await getStudentById(id)
            
            if (error) history.goBack()

            setStudent(data)
        }

        fetchStudent(studentId)
    }, [])

    const goBackHandler = () => {
        history.goBack()
    }

    const {
        picture,
        name,
        address,
        createdAt,
        updatedAt
    } = student || {}
    
    return (
        <S.Wrapper>
            <S.Balloon>
                {
                    student ? 
                        <S.Information>
                            <S.ButtonPosition>
                                <ButtonIcon onClick={goBackHandler}><FaArrowLeft/></ButtonIcon>
                            </S.ButtonPosition>
                            <S.ImageContent>
                                <img src={picture} alt='The student' />
                            </S.ImageContent>
                                <h4>{name}</h4>
                            <S.AddressInfo>
                                <Row>
                                    <Col>
                                        <Label>Cidade</Label>
                                        <p>{address.city}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Label>Bairro</Label>
                                        <p>{address.distric}</p>
                                    </Col>
                                    <Col>
                                        <Label>CEP</Label>
                                        <p>{address.cep}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Label>Rua</Label>
                                        <p>{address.street}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Label>N??mero</Label>
                                        <p>{address.houseNr}</p>
                                    </Col>
                                    <Col>
                                        <Label>Complemento</Label>
                                        <p>{address.complement}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Label>Foi adicionado:</Label>
                                        <p>{moment(createdAt).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm').toString()}</p>
                                    </Col>
                                    <Col>
                                        <Label>Ultima atualiza????o:</Label>
                                        <p>{moment(updatedAt).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm').toString()}</p>
                                    </Col>
                                </Row>
                            </S.AddressInfo>
                        </S.Information>
                    :
                        <S.Loading>
                            <Loading />
                        </S.Loading>
                }
            </S.Balloon>  
        </S.Wrapper>
    )
}

export default StudentDetails