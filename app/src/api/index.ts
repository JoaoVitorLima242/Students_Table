import axios from "axios"
import cookies from "../helpers/cookies"

const apiConfig = () => {
    const api = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    })

    api.defaults.headers.post['Content-Type'] = 'application/json'
    api.defaults.headers.put['Content-Type'] = 'application/json'

    const token = cookies.get('auth-token')

    if (token) {
        api.defaults.headers['auth-token'] = token
    }

  return api
}

export const api = apiConfig()