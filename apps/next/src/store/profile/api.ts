import { axiosBaseQuery } from "../baseQuery";
import {
  type RequestUpdateAvatarType,
  type RequestUpdateProfileType,
  type ResponseStatisticsType,
  type ResponseUpdateAvatarType,
} from "./types";
import { type UpdateProfileFormValues } from "@/components/Dashboard/Settings/ProfileForm";
import { createApi } from "@reduxjs/toolkit/query/react";

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
    updateProfile: builder.mutation<any, UpdateProfileFormValues>({
      query: (credentials: UpdateProfileFormValues) => ({
        url: "/users/updateProfile",
        data: credentials,
        method: "PUT",
      }),
    }),
    getStatistics: builder.mutation<ResponseStatisticsType, unknown>({
      query: () => ({
        url: "/dashboard/getStatistics",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useUpdateAvatarMutation,
  useGetStatisticsMutation,
  useUpdateProfileMutation,
} = profileApi;