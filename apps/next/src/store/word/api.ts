import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type IResponse } from "types/global";

import { type RootState } from "..";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_WORDIGO_BACKEND_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
export const wordApi = createApi({
  reducerPath: "wordApi",
  baseQuery,
  endpoints: (builder) => ({
    getWordData: builder.mutation<IResponse, string | number>({
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

export const { useCreateWordMutation, useGetWordDataMutation, useDeleteDicWordMutation } = wordApi;
