import { FaPlus } from 'react-icons/fa'

// Styles
import * as S from './styles'
// Components
import Search from '../../components/Search'
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getStudents } from '../../api/Student'
import { StudentDataResquest } from '../../api/Student/types'

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
                    students.map((student) => {
                        return (
                            <S.StudentCard>
                                
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