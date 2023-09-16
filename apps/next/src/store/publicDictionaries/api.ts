import { axiosBaseQuery } from "../baseQuery";
import { type GetPublicDictionariesType } from "./type";
import { createApi } from "@reduxjs/toolkit/query/react";
import { type IDictionary, type IResponse } from "types/global";

export const publicDictionariesApi = createApi({
  reducerPath: "publicDictionaryApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_WORDIGO_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    getPublicDictionaries: builder.mutation<
      IResponse<IDictionary[]>,
      GetPublicDictionariesType
    >({
      query: ({ page, size }) => ({
        url: `/publicDictionary/getPublicDictionaries?page=${page}&size=${size}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPublicDictionariesMutation } = publicDictionariesApi;
