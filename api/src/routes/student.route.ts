import { Router } from 'express'
import StudentControllers from '../controllers/Student'

const routes = Router()

routes.post('/', StudentControllers.createStudent)
routes.get('/', StudentControllers.getStudents)

export default routes