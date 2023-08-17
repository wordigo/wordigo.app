import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "./auth/api";
// import { authApi } from "./auth/api";
import AuthSlice from "./auth/slice";
import CommonSlice from "./common/slice";
import { dictionaryApi } from "./dictionaries/api";
import DictionarySlice from "./dictionaries/slice";
import { wordApi } from "./word/api";
import userDicWordSlice from "./word/slice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    dictionary: DictionarySlice,
    word: userDicWordSlice,
    common: CommonSlice,
    [authApi.reducerPath]: authApi.reducer,
    [dictionaryApi.reducerPath]: dictionaryApi.reducer,
    [wordApi.reducerPath]: wordApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([authApi.middleware, dictionaryApi.middleware, wordApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
