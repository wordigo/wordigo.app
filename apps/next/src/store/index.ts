import { authApi } from "./auth/api";
// import { authApi } from "./auth/api";
import AuthSlice from "./auth/slice";
import CommonSlice from "./common/slice";
import { dictionaryWordApi } from "./dictionarayWord/api";
import userDicWordSlice from "./dictionarayWord/slice";
import { dictionaryApi } from "./dictionaries/api";
import DictionarySlice from "./dictionaries/slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    dictionary: DictionarySlice,
    dictionaryWord: userDicWordSlice,
    common: CommonSlice,
    [authApi.reducerPath]: authApi.reducer,
    [dictionaryApi.reducerPath]: dictionaryApi.reducer,
    [dictionaryWordApi.reducerPath]: dictionaryWordApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      authApi.middleware,
      dictionaryApi.middleware,
      dictionaryWordApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
