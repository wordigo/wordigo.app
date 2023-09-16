import { axiosBaseQuery } from "../baseQuery";
import {
  type RequestUpdateAvatarType,
  type ResponseStatisticsType,
  type ResponseUpdateAvatarType,
} from "./types";
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
    getStatistics: builder.mutation<ResponseStatisticsType, unknown>({
      query: () => ({
        url: "/dashboard/getStatistics",
        method: "GET",
      }),
    }),
  }),
});

export const { useUpdateAvatarMutation, useGetStatisticsMutation } = profileApi;
