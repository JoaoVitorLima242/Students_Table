import { api } from ".."

type UploadResponse = {
  error: boolean
  imageUrl: string
}

export const uploadImage = async (file: File): Promise<UploadResponse> => {
    try {
      const form = new FormData();

      form.append('picture', file, file.name);

        const response = await api.post('/api/image', form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        return response.data
      } catch (error) {
        return error.response.data
      }
}