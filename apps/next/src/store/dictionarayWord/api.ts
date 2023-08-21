import { axiosBaseQuery } from "../baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { type IResponse } from "types/global";

export const dictionaryWordApi = createApi({
  reducerPath: "dictionaryWordApi",
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_WORDIGO_BACKEND_URL }),
  endpoints: (builder) => ({
    getDictionaryWords: builder.mutation<IResponse, string | number>({
      query: (slug) => ({
        url: `/dictionaries/getWords?slug=${slug}`,
        method: "GET",
      }),
    }),
    createWord: builder.mutation<any, any>({
      query: (create) => ({
        url: "/words/create",
        body: create,
        method: "POST",
      }),
    }),
    deleteDicWord: builder.mutation<any, any>({
      query: (deletes) => ({
        url: "/dictionaries/removeWord",
        body: deletes,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useCreateWordMutation, useGetDictionaryWordsMutation, useDeleteDicWordMutation } = dictionaryWordApi;
