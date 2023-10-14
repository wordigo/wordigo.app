import { axiosBaseQuery } from "../baseQuery";
import { type AuthRegisterValues } from "@/schemas/auth.schema";
import { createApi } from "@reduxjs/toolkit/query/react";
import { type IResponse } from "types/global";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_WORDIGO_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    register: builder.mutation<IResponse, AuthRegisterValues>({
      query: (credentials) => ({
        url: "/auth/signUp",
        data: credentials,
        method: "POST",
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
