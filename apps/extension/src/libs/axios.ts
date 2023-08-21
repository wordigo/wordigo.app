import { WORDIGO_JWT_TOKEN_COOKIE } from "@wordigo/common";
import axios from "axios";
import { localStorage } from "~utils/storage";

const baseURL = process.env.PLASMO_PUBLIC_BACKEND_URL;

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
    const token = await localStorage.get(WORDIGO_JWT_TOKEN_COOKIE);

    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

instance.interceptors.response.use(
  async (response) => {
    try {
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async (error) => {
    if (error.response.data.message === "jwt expired" && error.response.data.message === "No Authorization.") {
      const deletedToken = await localStorage.remove(WORDIGO_JWT_TOKEN_COOKIE);
    }
  }
);

export default instance;
