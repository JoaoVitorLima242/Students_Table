import { Router } from 'express'
import multer from 'multer'
import StudentControllers from '../controllers/Student'
import { StudentStorage } from '../helpers/storage'

const routes = Router()

const upload = multer({ storage: StudentStorage })

routes.post('/', upload.single('picture'), StudentControllers.createStudent)

export default routes