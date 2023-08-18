import { defaultBaseQuery } from "../baseQuery";
import { type AuthRegisterValues } from "@/schemas/auth.schema";
import { createApi } from "@reduxjs/toolkit/query/react";
import { type IResponse } from "types/global";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: defaultBaseQuery,
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
