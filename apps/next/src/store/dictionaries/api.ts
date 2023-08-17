import { createApi } from "@reduxjs/toolkit/query/react";
import { type IResponse } from "types/global";

import { defaultBaseQuery } from "../baseQuery";

export const dictionaryApi = createApi({
  reducerPath: "dictionaryApi",
  baseQuery: defaultBaseQuery,
  endpoints: (builder) => ({
    getUserDictionaries: builder.mutation<IResponse<any>, any>({
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
    deleteUserDictionaries: builder.mutation<any, any>({
      query: (dicID) => ({
        url: `/dictionaries/delete?dictionaryId=${dicID}`,
        method: "DELETE",
      }),
    }),
    updateUserDictionaries: builder.mutation<any, any>({
      query: () => ({
        url: "/dictionaries/update",
        method: "PUT",
      }),
    }),
  }),
});

export const { useGetUserDictionariesMutation, useCreateDictionaryMutation, useDeleteUserDictionariesMutation } = dictionaryApi;
