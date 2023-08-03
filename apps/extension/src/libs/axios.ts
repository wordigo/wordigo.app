import axios from "axios"

import { sendToBackground } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"

import { JWT_TOKEN_COOKIE } from "~utils/constants"

const baseURL = process.env.PLASMO_PUBLIC_BACKEND_URL

const storage = new Storage({
  area: "local"
})

const instance = axios.create({
  baseURL: `${baseURL}`
})

instance.interceptors.request.use(async (config) => {
  try {
    const token = await storage.get(JWT_TOKEN_COOKIE)

    config.headers.Authorization = `Bearer ${token}`
    return config
  } catch (error) {
    return Promise.reject(error)
  }
})

export default instance
