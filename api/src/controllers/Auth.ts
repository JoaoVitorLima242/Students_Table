import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import UserSchema from '../models/User'

type AuthRequest = {
    email: string
    name?: string
    password: string
    confirmPassword?: string
  }
  

class AuthController {
    public async Register (req: Request, res: Response): Promise<Response> {
        const {
            name,
            email,
            password,
            confirmPassword
        }: AuthRequest = req.body

        // Check for required fields
        if (!name  || !email  || !password  || !confirmPassword ) {
            return res.status(400).json({ error: true, message: 'Por favor, preencha todos os campos !' })
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: true, message: 'As senhas não conferem !' })
        }

        // Check if user exists
        const emailExist = await UserSchema.findOne({ email })
        if (emailExist) {
            return res.status(400).json({ error: true, message: 'O e-mail informado já esta em uso !' })
        }

        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        const user = new UserSchema({
        email,
        name,
        password: passwordHash
        })

        try {
        const newUser = await user.save()

        // Create token
        const token = jwt.sign(
            // Payload
            {
            name: newUser.name,
            id: newUser._id
            },
            process.env.TOKEN_SECRET!
        )

            res.json({ error: null, message: 'Você realizou o cadastro com sucesso.', token, userId: newUser._id })
        } catch (error) {
            res.status(400).json({ error: true, message: 'Erro ao tentar criar um usuário.' })
        }
      
    }
}

export default new AuthController()