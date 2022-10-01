import { Router } from 'express'
import StudentControllers from '../controllers/Student'

const routes = Router()

routes.post('/', StudentControllers.createStudent)

export default routes