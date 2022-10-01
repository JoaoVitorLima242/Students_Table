import { api } from ".."

export const uploadImage = async (file) => {
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