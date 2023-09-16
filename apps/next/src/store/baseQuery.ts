import { type BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import axios, { type AxiosError, type AxiosRequestConfig } from "axios";
import { signOut } from "next-auth/react";

export const axiosInstance = axios.create();

export const setAuthToken = (token) => {
  if (!!token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

export const setAcceptLanguage = (language: string) => {
  if (!!language) {
    axiosInstance.defaults.headers.common["Accept-Language"] = language;
  } else {
    delete axiosInstance.defaults.headers.common["Accept-Language"];
  }
};

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data }) => {
    try {
      const result = await axiosInstance({ url: baseUrl + url, method, data });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      if (err.response?.status === 401) {
        // void signOut({ callbackUrl: "/" });
      }

      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
