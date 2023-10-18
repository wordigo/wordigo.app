import { axiosBaseQuery } from "../baseQuery";
import {
  type GetPublicDictionariesType,
  type GetPublicDictionaryBySlugType,
} from "./type";
import { buildDynamicUrl } from "@/utils/getUrl";
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
      query: ({ search, level, page, size }) => {
        const baseUrl = "/publicDictionary/getPublicDictionaries?";
        const url = buildDynamicUrl(baseUrl, { level, page, size, search });

        return {
          method: "GET",
          url,
        };
      },
    }),
    getPublicDictionaryBySlug: builder.mutation<
      IResponse<IDictionary>,
      GetPublicDictionaryBySlugType
    >({
      query: ({ slug }) => ({
        url: `/publicDictionary/getPublicDictionaryBySlug?slug=${slug}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetPublicDictionariesMutation,
  useGetPublicDictionaryBySlugMutation,
} = publicDictionariesApi;
