import { Link, useHistory } from 'react-router-dom'
import { ChangeEvent, useEffect, useState } from 'react'
import { FaPlus, FaMapPin, FaMapMarkedAlt, FaRegEdit, FaTrashAlt, FaEye} from 'react-icons/fa'

// Styles
import * as S from './styles'
// Components
import Search from '../../components/Search'
import Button from '../../components/Button'
import ButtonIcon from '../../components/ButtonIcon'
import ConfirmDeleteModal from '../../components/Modals/ConfirmDelete'
import Alert from '../../components/Alert'
// Requests
import { deleteStudent, getStudents } from '../../api/Student'
import { StudentData } from '../../api/Student/types'
// Helpers
import { maxLengthString } from '../../helpers/string'
import Loading from '../../components/Loading'

const Dashboard = () => {
    const history = useHistory()

    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(99)
    const [search, setSearch] = useState('')
    const [students, setStudents] = useState<StudentData[]>([])
    const [deleteStudentId, setDeleteStudentId] = useState('')
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        fetchStudents()
    },[search])

    const fetchStudents = async () => {
        setLoading(true)
        const response = await getStudents(page, limit, search)
        setLoading(false)
        setPage(response.page)
        setLimit(response.limit)
        setStudents(response.students)
    }

    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const modalHandler = () => {
        setModal(!modal)
    }

    const selectStudentToDelete = (id: string) => {
        setDeleteStudentId(id)
        modalHandler()
    }

    const deleteStudentHandler = async () => {
        const {message, error } = await deleteStudent(deleteStudentId)
        if (error) {
            alert(message)
        }
        fetchStudents()
        modalHandler()
    }

    const goTo = (path: string) => history.push(path)

    const strMaxLength = 12

    return (
        <S.Wrapper>
            <S.Interaction>
                <Search
                    onChange={searchHandler}
                    placeholder='Search...'
                />
                <S.ButtonContainer>
                    <Button onClick={() => goTo('/add-student')}>
                       <FaPlus/> ADD
                    </Button>
                </S.ButtonContainer>
            </S.Interaction>
            {
                loading ? 
                    <S.Loading>
                        <Loading/>
                    </S.Loading>
                :
                    <S.StudentsGrid>
                        {!!students && students?.length > 0 ?
                            students.map(({picture, name, address, _id}) => {
                                return (
                                    <S.StudentCard key={_id}>
                                        <S.ImageContent>
                                            <img src={picture} alt=''/>
                                        </S.ImageContent>
                                        <S.Infos>
                                            <h4>{name}</h4>
                                            <S.InfoWithIcon>
                                                <p><FaMapPin/><span>{maxLengthString(strMaxLength,address?.street)} | {address.houseNr} {address.complement && `| ${address.complement}`} </span></p>
                                                <p><FaMapMarkedAlt/><span>{maxLengthString(strMaxLength,address?.city)} |  {address.uf}</span></p>
                                            </S.InfoWithIcon>
                                            <S.ButtonsIconsContainer>
                                                <ButtonIcon onClick={() => goTo(`/student?studentId=${_id}`)}><FaEye/></ButtonIcon>
                                                <ButtonIcon onClick={() => goTo(`/student/edit?studentId=${_id}`)} color='green'><FaRegEdit/></ButtonIcon>
                                                <ButtonIcon onClick={() => selectStudentToDelete(_id)} color='red'><FaTrashAlt/></ButtonIcon>
                                            </S.ButtonsIconsContainer>
                                        </S.Infos>
                                    </S.StudentCard>
                                )
                            })
                        :
                            <S.WithoutStudent>
                                <Alert>Você não tem nenhum estudante salvo. <Link to='/add-student'>Acesse o formulário para adicionar!</Link></Alert>
                            </S.WithoutStudent>
                        }
                    </S.StudentsGrid>

            }
            <ConfirmDeleteModal 
                isOpen={modal}
                onClose={modalHandler}
                onConfirm={deleteStudentHandler}
            />
        </S.Wrapper>
    )
}

export default Dashboard