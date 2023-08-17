import { createApi } from "@reduxjs/toolkit/query/react";
import { type IResponse } from "types/global";

import { defaultBaseQuery } from "../baseQuery";

export const wordApi = createApi({
  reducerPath: "wordApi",
  baseQuery: defaultBaseQuery,
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
