import { Request, Response } from 'express'

type UpdateUser = {
    email: string;
    name: string;
    password?: string;
    updatedAt: Date
}

class UserControllers {
  public async getUserByToken (req: Request, res: Response): Promise<Response> {
    const token = req.header('auth-token')

    if (!token) {
      return res.status(401).json({ error: 'Acesso negado!' })
    }
    
    return res.json({token})
  }


}

export default new UserControllers()