import { Router } from 'express'
import StudentControllers from '../controllers/Student'

const routes = Router()

routes.post('/', StudentControllers.createStudent)
routes.get('/', StudentControllers.getStudents)
routes.get('/:id', StudentControllers.getStudentById)

export default routes