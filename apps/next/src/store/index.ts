import { authApi } from "./auth/api";
import AuthSlice from "./auth/slice";
import { commonApi } from "./common/api";
import CommonSlice from "./common/slice";
import { dictionaryWordApi } from "./dictionarayWord/api";
import userDicWordSlice from "./dictionarayWord/slice";
import { dictionaryApi } from "./dictionaries/api";
import DictionarySlice from "./dictionaries/slice";
import { feedbackApi } from "./feedback/api";
import FeedbackSlice from "./feedback/slice";
import { profileApi } from "./profile/api";
import ProfileSlice from "./profile/slice";
import { publicDictionariesApi } from "./publicDictionaries/api";
import publicDictionaresSlice from "./publicDictionaries/slice";
// import { authApi } from "./auth/api";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    dictionary: DictionarySlice,
    dictionaryWord: userDicWordSlice,
    common: CommonSlice,
    profile: ProfileSlice,
    publicDictionaries: publicDictionaresSlice,
    feedback: FeedbackSlice,
    [authApi.reducerPath]: authApi.reducer,
    [publicDictionariesApi.reducerPath]: publicDictionariesApi.reducer,
    [dictionaryApi.reducerPath]: dictionaryApi.reducer,
    [dictionaryWordApi.reducerPath]: dictionaryWordApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [feedbackApi.reducerPath]: feedbackApi.reducer,
    [commonApi.reducerPath]: commonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      authApi.middleware,
      dictionaryApi.middleware,
      dictionaryWordApi.middleware,
      profileApi.middleware,
      publicDictionariesApi.middleware,
      feedbackApi.middleware,
      commonApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
