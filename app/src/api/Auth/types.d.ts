import { PostRequest } from '../types'

export type AuthRequest = {
    token: string
} & PostRequest

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