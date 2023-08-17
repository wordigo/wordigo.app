import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

import { type RootState } from ".";

export const defaultBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_WORDIGO_BACKEND_URL,
  prepareHeaders: (headers, { getState }) => {
    const store = getState() as RootState;
    if (store.auth.token) {
      headers.set("Authorization", `Bearer ${store.auth.token}`);
    }
    headers.set("Accept-Language", store.common.language);
    return headers;
  },
});
