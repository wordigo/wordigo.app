import { axiosBaseQuery } from "../baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const feedbackApi = createApi({
  reducerPath: "feedbackApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_WORDIGO_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    postFeedBack: builder.mutation<any, any>({
      query: (data) => ({
        url: "/general/feedback",
        data,
        method: "post",
      }),
    }),
  }),
});

export const { usePostFeedBackMutation } = feedbackApi;
