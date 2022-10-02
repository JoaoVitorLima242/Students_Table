import { Router } from 'express'
import StudentControllers from '../controllers/Student'
import token from '../helpers/token'

const routes = Router()

routes.post('/',token.check, StudentControllers.createStudent)
routes.get('/', token.check, StudentControllers.getStudents)
routes.get('/:id', token.check, StudentControllers.getStudentById)
routes.put('/:id', token.check, StudentControllers.updateUser)
routes.delete('/:id', token.check, StudentControllers.deleteStudent)

export default routes