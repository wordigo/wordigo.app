import { type UserAuthFormProps } from "@/pages/auth/signup/signup-form";
import { createApi } from "@reduxjs/toolkit/query/react";
import { type IResponse } from "types/global";

import { defaultBaseQuery } from "../baseQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: defaultBaseQuery,
  endpoints: (builder) => ({
    register: builder.mutation<IResponse, UserAuthFormProps>({
      query: (credentials) => ({
        url: "/auth/signUp",
        body: credentials,
        method: "POST",
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
