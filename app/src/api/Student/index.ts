import { api } from ".."

export const createStudent = async (data) => {
    try {
        const response = await api.post('/api/admin/student', data)
        return response.data
      } catch (error) {
        return error.response.data
      }
}