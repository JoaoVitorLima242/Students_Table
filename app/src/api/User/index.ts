import { api } from ".."
import { PostRequest } from "../types"
import { UserData } from "./type"

export const updateUserByToken = async (data: UserData): Promise<PostRequest> => {
  try {
    const response = await api.put(`/api/admin/user/`, data)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const getUserByToken = async (): Promise<any> => {
  try {
    const response = await api.get(`/api/admin/user/`)
    return response.data
  } catch (error) {
    return error.response.data
  }
}