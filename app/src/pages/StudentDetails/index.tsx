import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
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

const StudentDetails = () => {
    const location = useLocation()
    const history = useHistory()

    const [student, setStudent] = useState<StudentData>(null)

    useEffect(() => {
        const userId = location.pathname.slice(9)
        
        const fetchStudent = async (id: string) => {
            const {data} = await getStudentById(id)
            setStudent(data)
        }

        fetchStudent(userId)
    }, [])

    const goBackHandler = () => {
        history.goBack()
    }

    const {
        picture,
        name,
        address,
        createdAt
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
                                        <Label>Número</Label>
                                        <p>{address.houseNr}</p>
                                    </Col>
                                    <Col>
                                        <Label>Complemento</Label>
                                        <p>{address.complement}</p>
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