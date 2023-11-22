import { axiosBaseQuery } from "../baseQuery";
import { TranslateParams, TranslateResponse } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const commonApi = createApi({
  reducerPath: "commonApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_WORDIGO_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    translateWord: builder.mutation<TranslateResponse, TranslateParams>({
      query: (credentials: TranslateParams) => ({
        url: "/translation/translate",
        data: credentials,
        method: "POST",
      }),
    }),
  }),
});

export const { useTranslateWordMutation } = commonApi;
