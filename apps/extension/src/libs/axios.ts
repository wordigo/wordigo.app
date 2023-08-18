import { Storage } from "@plasmohq/storage";
import { WORDIGO_JWT_TOKEN_COOKIE } from "@wordigo/common";
import axios from "axios";

const baseURL = process.env.PLASMO_PUBLIC_BACKEND_URL;

const storage = new Storage({
  area: "local",
});

const instance = axios.create({
  baseURL: `${baseURL}`,
});

export interface BaseResponse<T> {
  data: T;
  messageCode: string;
  message: string;
}

instance.interceptors.request.use(async (config) => {
  try {
    const token = await storage.get(WORDIGO_JWT_TOKEN_COOKIE);

    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

export default instance;
