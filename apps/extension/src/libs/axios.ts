import { WORDIGO_JWT_TOKEN_COOKIE } from "@wordigo/common"
import axios, { type AxiosError } from "axios"

import { localStorage } from "~utils/storage"

const baseURL = process.env.PLASMO_PUBLIC_BACKEND_URL

const instance = axios.create({
  baseURL
})

export interface BaseResponse<T> {
  success: boolean
  data: T
  messageCode: string
  message: string
}

instance.interceptors.request.use(async (config) => {
  try {
    const token = await localStorage.get(WORDIGO_JWT_TOKEN_COOKIE)

    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
  } catch (error) {
    return Promise.reject(error)
  }
})

instance.interceptors.response.use(
  async (response) => {
    try {
      return response
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async (error) => {
    const err = error as AxiosError
    if (err.response.status === 401) {
      const deletedToken = await localStorage.remove(WORDIGO_JWT_TOKEN_COOKIE)
    }
  }
)

export default instance
