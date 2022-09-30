import { api } from ".."

export const registerRequest = async (data): Promise<any> => {
    try {
      const response = await api.post('/api/auth/register', data)
      return response.data
    } catch (error) {
      return error.response.data
    }
  }
  
  export const logInRequest = async (data): Promise<any> => {
    try {
      const response = await api.post('/api/auth/login', data)
      return response.data
    } catch (error) {
      return error.response.data
    }
  }
  