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
    getWordData: builder.query<IResponse, any>({
      query: (dicID: string | number) => ({
        url: `/dictionaries/getWords?dictionaryId=${dicID}`,
        method: "GET",
      }),
    }),
    createWord: builder.mutation<any, any>({
      query: (create) => ({
        url: "/word/create",
        body: create,
        method: "POST",
      }),
    }),
  }),
});

export const { useCreateWordMutation, useGetWordDataQuery } = wordApi;
