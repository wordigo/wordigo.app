import axios from "axios"

import { sendToBackground } from "@plasmohq/messaging"

const baseURL = process.env.PLASMO_PUBLIC_BACKEND_URL

const instance = axios.create({
  baseURL: `${baseURL}`
})

instance.interceptors.request.use(async (config) => {
  try {
    const token = await sendToBackground({ name: "getToken" })
    config.headers.Authorization = `Bearer ${token}`
    return config
  } catch (error) {
    return Promise.reject(error)
  }
})

export default instance
