import { buildDynamicUrl } from "@/utils/getUrl";
import { createApi } from "@reduxjs/toolkit/query/react";
import { type IResponse } from "types/global";
import { axiosBaseQuery } from "../baseQuery";
import { type GetUserDictionaryWordsType, type ResponseDictionaryWords } from "./type";

export const dictionaryWordApi = createApi({
  reducerPath: "dictionaryWordApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_WORDIGO_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    getDictionaryWords: builder.mutation<
      IResponse<ResponseDictionaryWords>,
      GetUserDictionaryWordsType
    >({
      query: (queryFilter) => {
        const baseUrl = "/dictionaries/getWords?";
        const url = buildDynamicUrl(baseUrl, queryFilter);

        return {
          url,
          method: "get",
        }
      },
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
      { wordId: number; slug: string }
    >({
      query: (data: { wordId: number; slug: string }) => ({
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
