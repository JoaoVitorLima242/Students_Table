import { Router } from 'express'

// Controllers
import AuthController from '../controllers/Auth'

const routes = Router()

routes.post('/register', AuthController.Register)
routes.post('/login', AuthController.Login)

export default routes