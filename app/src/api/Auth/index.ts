import { api } from ".."
import { AuthRequest, LoginData, RegisterData } from "./types"

export const registerRequest = async (data: RegisterData): Promise<AuthRequest> => {
    try {
      const response = await api.post('/api/auth/register', data)
      return response.data
    } catch (error) {
      return error.response.data
    }
  }
  
  export const logInRequest = async (data: LoginData): Promise<AuthRequest> => {
    try {
      const response = await api.post('/api/auth/login', data)
      return response.data
    } catch (error) {
      return error.response.data
    }
  }
  