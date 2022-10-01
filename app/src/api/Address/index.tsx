import axios from "axios"
import { api } from ".."

export type AddressResponse ={
  cep: string,
  logradouro: string
  complemento: string
  bairro: string
  uf: string
  localidade: string
}

export const getAddressByCep = async (cep: string): Promise<AddressResponse> => {
      const data = await axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error.message
        })
      
      return data
  }