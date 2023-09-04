import { axiosBaseQuery } from "../baseQuery";
import {
  type ResponseUpdateAvatarType,
  type RequestUpdateAvatarType,
} from "./types";
import { type AuthRegisterValues } from "@/schemas/auth.schema";
import { createApi } from "@reduxjs/toolkit/query/react";
import { type IResponse } from "types/global";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_WORDIGO_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    updateAvatar: builder.mutation<
      ResponseUpdateAvatarType,
      RequestUpdateAvatarType
    >({
      query: (credentials: RequestUpdateAvatarType) => ({
        url: "/users/updateAvatar",
        data: credentials,
        method: "PUT",
      }),
    }),
  }),
});

export const { useUpdateAvatarMutation } = profileApi;
