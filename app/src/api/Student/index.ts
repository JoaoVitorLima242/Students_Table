import { api } from ".."

// Types
import { PostRequest } from "../types"
import { 
  getStudentById as getStudentByIdType, 
  getStudents as getStudentsType, 
  StudentData 
} from "./types"

export const createStudent = async (data: StudentData): Promise<PostRequest> => {
  try {
    const response = await api.post('/api/admin/student', data)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const updateStudent = async (id: string, data: StudentData): Promise<PostRequest> => {
  try {
    const response = await api.put(`/api/admin/student/${id}`, data)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const getStudents = async (page, limit, search): Promise<getStudentsType> => {
  try {
    const response = await api.get(`/api/admin/student?page=${page}&limit=${limit}&search=${search}`)
    return response.data.data
  } catch (error) {
    return error.response.data
  }
}

export const getStudentById = async (id: string): Promise<getStudentByIdType> => {
  try {
    const response = await api.get(`/api/admin/student/${id}`)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const deleteStudent = async (id: string): Promise<PostRequest> => {
  try {
    const response = await api.delete(`/api/admin/student/${id}`)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

