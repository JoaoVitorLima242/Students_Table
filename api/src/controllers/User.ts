import { Request, Response } from 'express'

// Helpers
import Token from '../helpers/token'

type UpdateUser = {
    email: string;
    name: string;
    password?: string;
    updatedAt: Date
}

class UserControllers {
  public async getUserByToken (req: Request, res: Response): Promise<Response> {
    try {
      const token = req.header('auth-token')

      if (!token) {
        return res.status(401).json({ error: true, message: 'Acesso negado!' })
      }

      const user = await Token.getUser(res, token)
      
      return res.json({ error: null, user })
    } catch (error) {
      res.status(400).json({ error: 'O usuário não foi encontrado!' })
    }
  }


}

export default new UserControllers()