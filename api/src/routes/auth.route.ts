import { Router } from 'express'

import AuthController from '../controllers/Auth'

const routes = Router()

routes.post('/register', AuthController.Register)

export default routes