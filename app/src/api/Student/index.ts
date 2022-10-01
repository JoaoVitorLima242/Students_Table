import { api } from ".."

// Types
import { PostRequest } from "../types"
import { getStudents as getStudentsType, StudentDataResquest } from "./types"

export const createStudent = async (data: StudentDataResquest): Promise<PostRequest> => {
  try {
    const response = await api.post('/api/admin/student', data)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const getStudents = async ({page, limit, search}): Promise<getStudentsType> => {
  try {
    const response = await api.get(`/api/admin/student?page=${page}&limit=${limit}&search=${search}`)
    return response.data.data
  } catch (error) {
    return error.response.data
  }
}