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
export const dictionaryApi = createApi({
  reducerPath: "dictionaryApi",
  baseQuery,
  endpoints: (builder) => ({
    getDictionaryData: builder.query<IResponse, any>({
      query: () => ({
        url: "/dictionaries/getUserDictionaries",
        method: "GET",
      }),
    }),
    createDictionary: builder.mutation<any, any>({
      query: (create) => ({
        url: "/dictionaries/create",
        body: create,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetDictionaryDataQuery, useCreateDictionaryMutation } = dictionaryApi;
