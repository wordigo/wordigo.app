import { authApi } from "./auth/api";
// import { authApi } from "./auth/api";
import AuthSlice from "./auth/slice";
import DictionarySlice from "./dictionaries/slice";
import userDicWordSlice from "./word/slice";
import { configureStore } from '@reduxjs/toolkit'
import { dictionaryApi } from './dictionaries/api'
import { wordApi } from './word/api'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    [authApi.reducerPath]: authApi.reducer,
    [dictionaryApi.reducerPath]: dictionaryApi.reducer,
    [wordApi.reducerPath]: wordApi.reducer,
    dictionary: DictionarySlice,
    word: userDicWordSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat([authApi.middleware, dictionaryApi.middleware, wordApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
