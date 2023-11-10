import { axiosBaseQuery } from "../baseQuery";
import { type ResponseDictionaryWords } from "./type";
import { createApi } from "@reduxjs/toolkit/query/react";
import { type IResponse } from "types/global";

export const dictionaryWordApi = createApi({
  reducerPath: "dictionaryWordApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_WORDIGO_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    getDictionaryWords: builder.mutation<
      IResponse<ResponseDictionaryWords>,
      string
    >({
      query: (slug) => ({
        url: `/dictionaries/getWords?slug=${slug}`,
        method: "get",
      }),
    }),
    createWord: builder.mutation<IResponse, any>({
      query: (data) => ({
        url: "/words/create",
        data,
        method: "post",
      }),
    }),
    deleteDicWord: builder.mutation<
      IResponse,
      { wordId: string; slug: string }
    >({
      query: (data: { wordId: string; slug: string }) => ({
        url: "/dictionaries/removeWord",
        method: "delete",
        data,
      }),
    }),
  }),
});

export const {
  useCreateWordMutation,
  useGetDictionaryWordsMutation,
  useDeleteDicWordMutation,
} = dictionaryWordApi;
