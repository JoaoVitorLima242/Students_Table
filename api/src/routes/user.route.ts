import { Router } from 'express'

// Controllers
import UserController from '../controllers/User'
import Token from '../helpers/token'

const routes = Router()

routes.get( '/', Token.check, UserController.getUserByToken )
routes.put( '/', Token.check, UserController.updateUserByToken )

export default routes