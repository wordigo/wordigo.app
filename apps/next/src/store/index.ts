import { authApi } from "./auth/api";
// import { authApi } from "./auth/api";
import AuthSlice from "./auth/slice";
import DictionarySlice from "./dictionary/slice";
import { configureStore } from '@reduxjs/toolkit'
import { dictionaryApi } from './dictionary/api'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    [authApi.reducerPath]: authApi.reducer,
    [dictionaryApi.reducerPath]: dictionaryApi.reducer,
    dictionary: DictionarySlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat([authApi.middleware, dictionaryApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
