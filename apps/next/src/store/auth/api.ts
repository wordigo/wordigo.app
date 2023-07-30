import { type AuthRegisterValues } from "@/pages/auth/signup/signup-form";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type IResponse } from "types/global";

import { type RootState } from "..";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_WORDIGO_BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation<IResponse, AuthRegisterValues>({
      query: (credentials) => ({
        url: "/auth/signUp",
        body: credentials,
        method: "POST",
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
