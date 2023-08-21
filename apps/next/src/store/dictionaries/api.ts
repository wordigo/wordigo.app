import { axiosBaseQuery } from "../baseQuery";
import { type CreateDictionaryType, type Dictionary, type GetDictionaryIdType } from "./type";
import { createApi } from "@reduxjs/toolkit/query/react";
import { type IResponse } from "types/global";

export const dictionaryApi = createApi({
  reducerPath: "dictionaryApi",
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_WORDIGO_BACKEND_URL }),
  endpoints: (builder) => ({
    getUserDictionaries: builder.mutation<IResponse<Dictionary[]>, any>({
      query: () => ({
        url: "/dictionaries/getUserDictionaries",
        method: "GET",
      }),
    }),
    getDictionaryDetail: builder.mutation<Dictionary, GetDictionaryIdType>({
      query: ({ slug }: GetDictionaryIdType) => ({
        url: `/dictionaries/getUserDictionaryBySlug?slug=${slug}`,
        method: "GET",
      }),
    }),
    createDictionary: builder.mutation<CreateDictionaryType, IResponse<Dictionary[]>>({
      query: (create) => ({
        url: "/dictionaries/create",
        body: create,
        method: "POST",
      }),
    }),
    deleteUserDictionaries: builder.mutation<IResponse, GetDictionaryIdType>({
      query: ({ slug }: GetDictionaryIdType) => ({
        url: `/dictionaries/delete?slug=${slug}`,
        method: "DELETE",
      }),
    }),
    updateUserDictionaries: builder.mutation<GetDictionaryIdType, any>({
      query: () => ({
        url: "/dictionaries/update",
        method: "PUT",
      }),
    }),
  }),
});

export const { useGetUserDictionariesMutation, useCreateDictionaryMutation, useDeleteUserDictionariesMutation, useGetDictionaryDetailMutation } = dictionaryApi;
