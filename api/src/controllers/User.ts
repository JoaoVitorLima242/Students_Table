import { Request, Response } from 'express'
import bcrypt from 'bcrypt'

// Helpers
import Token from '../helpers/token'
// Models
import UserSchema from '../models/User'

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

  public async updateUserByToken (req: Request, res: Response): Promise<Response> {
    const {
      id,
      name,
      email,
      password,
      confirmPassword
    } = req.body

    const token = req.header('auth-token')
    const user = await Token.getUser(res, token)


    if (user._id.toString() !== id) {
      return res.status(401).json({ error: 'Acesso negado!' })
    }

    const updateUser: UpdateUser = {
      email,
      name,
      updatedAt: new Date()
    }

    if (password !== confirmPassword) {
      return res.status(401).json({ error: 'As senhas não conferem!' })
    } 
    
    if (password === confirmPassword && !password && password === '') {
      const salt = await bcrypt.genSalt(12)
      const passwordHash = await bcrypt.hash(password, salt)

      updateUser.password = passwordHash
    }
      
    try {
      const updatedUserResponse = await UserSchema.findOneAndUpdate({ _id: user._id }, { $set: updateUser }, { new: true })

      return res.json({ error: null, msg: 'Usuario atualizado com sucesso!', data: updatedUserResponse })
    } catch (error) {
      return res.status(401).json({ error: true, message: "Houve algum erro na atualização de usuário." })
    }
  }


}

export default new UserControllers()