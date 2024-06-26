import { buildDynamicUrl } from "@/utils/getUrl";
import { createApi } from "@reduxjs/toolkit/query/react";
import { type IResponse } from "types/global";
import { axiosBaseQuery } from "../baseQuery";
import {
  type CreateDictionaryType,
  type Dictionary,
  type GetDictionaryIdType,
  type GetUserDictionariesType,
  type UpdateDictionaryImageType,
} from "./type";

export const dictionaryApi = createApi({
  reducerPath: "dictionaryApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_WORDIGO_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    getDictionaries: builder.mutation<
      IResponse<Dictionary[]>,
      GetUserDictionariesType
    >({
      query: (queryFilter) => {
        const baseUrl = "/dictionaries/getUserDictionariesFilter?";
        const url = buildDynamicUrl(baseUrl, queryFilter);

        return {
          url,
          method: "GET",
        };
      },
    }),
    getDictionaryDetail: builder.mutation<
      IResponse<Dictionary>,
      GetDictionaryIdType
    >({
      query: ({ slug }: GetDictionaryIdType) => ({
        url: `/dictionaries/getUserDictionaryBySlug?slug=${slug}`,
        method: "GET",
      }),
    }),
    createDictionary: builder.mutation<
      IResponse<Dictionary[]>,
      CreateDictionaryType
    >({
      query: (data) => ({
        url: "/dictionaries/create",
        data,
        method: "POST",
      }),
    }),
    deleteDictionaries: builder.mutation<IResponse, GetDictionaryIdType>({
      query: ({ slug }: GetDictionaryIdType) => ({
        url: `/dictionaries/delete?slug=${slug}`,
        method: "DELETE",
      }),
    }),
    updateDictionaries: builder.mutation<
      IResponse<Dictionary>,
      Partial<Dictionary>
    >({
      query: (data) => ({
        url: "/dictionaries/update",
        method: "PUT",
        data,
      }),
    }),
    updateDictionaryImage: builder.mutation<
      IResponse<Dictionary>,
      UpdateDictionaryImageType
    >({
      query: (data) => ({
        url: "/dictionaries/updateImage",
        method: "PUT",
        data,
      }),
    }),
  }),
});

export const {
  useGetDictionariesMutation,
  useDeleteDictionariesMutation,
  useUpdateDictionariesMutation,
  useCreateDictionaryMutation,
  useGetDictionaryDetailMutation,
  useUpdateDictionaryImageMutation
} = dictionaryApi;
