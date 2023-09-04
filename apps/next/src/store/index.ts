import { authApi } from "./auth/api";
// import { authApi } from "./auth/api";
import AuthSlice from "./auth/slice";
import CommonSlice from "./common/slice";
import { dictionaryWordApi } from "./dictionarayWord/api";
import userDicWordSlice from "./dictionarayWord/slice";
import { dictionaryApi } from "./dictionaries/api";
import DictionarySlice from "./dictionaries/slice";
import { profileApi } from "./profile/api";
import ProfileSlice from "./profile/slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    dictionary: DictionarySlice,
    dictionaryWord: userDicWordSlice,
    common: CommonSlice,
    profile: ProfileSlice,
    [authApi.reducerPath]: authApi.reducer,
    [dictionaryApi.reducerPath]: dictionaryApi.reducer,
    [dictionaryWordApi.reducerPath]: dictionaryWordApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      authApi.middleware,
      dictionaryApi.middleware,
      dictionaryWordApi.middleware,
      profileApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
