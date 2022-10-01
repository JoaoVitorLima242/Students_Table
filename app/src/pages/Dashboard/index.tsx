import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaPlus, FaMapPin, FaMapMarkedAlt, FaRegEdit, FaTrashAlt, FaEye} from 'react-icons/fa'

// Styles
import * as S from './styles'
// Components
import Search from '../../components/Search'
import Button from '../../components/Button'
import ButtonIcon from '../../components/ButtonIcon'
// Requests
import { getStudents } from '../../api/Student'
import { StudentDataResquest } from '../../api/Student/types'
// Helpers
import { maxLengthString } from '../../helpers/string'

const Dashboard = () => {
    const history = useHistory()

    const [page, setPage] = useState(0)
    const [total, setTotal] = useState(0)
    const [limit, setLimit] = useState(10)
    const [search, setSearch] = useState('')
    const [students, setStudents] = useState<StudentDataResquest[]>([])

    useEffect(() => {
        const fetchStudents = async () => {
            const response = await getStudents({page, limit, search})
            setPage(response.page)
            setLimit(response.limit)
            setTotal(response.total)
            setStudents(response.students)
        }

        fetchStudents()
    },[page, limit, search])

    const goTo = (path: string) => history.push(path)

    const strMaxLength = 16

    return (
        <S.Wrapper>
            <S.Interaction>
                <Search 
                    placeholder='Search...'
                />
                <S.ButtonContainer>
                    <Button onClick={() => goTo('/add-student')}>
                       <FaPlus/> ADD
                    </Button>
                </S.ButtonContainer>
            </S.Interaction>
            <S.StudentsGrid>
                {students && students.length > 0 ?
                    students.map(({picture, name, address, _id}) => {
                        return (
                            <S.StudentCard key={_id}>
                                <S.ImageContent>
                                    <img src={picture} alt=''/>
                                </S.ImageContent>
                                <S.Infos>
                                    <h4>{name}</h4>
                                    <S.InfoWithIcon>
                                        <p><FaMapPin/><span>{maxLengthString(strMaxLength,address.street)} | {address.houseNr} {address.complement && `| ${address.complement}`} </span></p>
                                        <p><FaMapMarkedAlt/><span>{maxLengthString(strMaxLength,address.city)} |  {address.uf}</span></p>
                                    </S.InfoWithIcon>
                                    <S.ButtonsIconsContainer>
                                        <ButtonIcon><FaEye/></ButtonIcon>
                                        <ButtonIcon color='green'><FaRegEdit/></ButtonIcon>
                                        <ButtonIcon color='red'><FaTrashAlt/></ButtonIcon>
                                    </S.ButtonsIconsContainer>
                                </S.Infos>
                            </S.StudentCard>
                        )
                    })
                :
                    <p>Voce nao tem estudantes</p>
                }
            </S.StudentsGrid>
        </S.Wrapper>
    )
}

export default Dashboard