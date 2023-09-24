import { publicDictionariesApi } from "./api";
import { type Dictionary } from "./type";
import { createSlice } from "@reduxjs/toolkit";
import { type IDictionary, type IResponse } from "types/global";

interface IDictionaryState {
  dictionaries: IResponse<IDictionary[]> | null;
  dictionariesLoading: boolean;
  dictionaryDetail: Dictionary | null;
}

const initialState: IDictionaryState = {
  dictionaries: null,
  dictionariesLoading:false,
  dictionaryDetail: null,
} as IDictionaryState;

const publicDictionarySlice = createSlice({
  name: "publicDictionaries",
  initialState,
  reducers: {
    setDictionaries(state, action) {
      state.dictionaries = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      publicDictionariesApi.endpoints.getPublicDictionaries.matchPending,
      (state) => {
        state.dictionariesLoading = true
      }
    );
    builder.addMatcher(
      publicDictionariesApi.endpoints.getPublicDictionaries.matchFulfilled,
      (state, action) => {
        state.dictionariesLoading = false
        state.dictionaries = action.payload;
      }
    );
  },
});

export default publicDictionarySlice.reducer;
export const { setDictionaries } = publicDictionarySlice.actions;
