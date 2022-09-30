import { PostRequest } from '../types'

export class AuthRequest extends PostRequest {
    token: string
    userId: string
}

export type RegisterData = {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export type LoginData = {
    email: string
    password: string
}