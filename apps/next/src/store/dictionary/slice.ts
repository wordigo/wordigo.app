import { createSlice } from "@reduxjs/toolkit";

import { dictionaryApi } from "./api";

interface IDictionaryState {
  dictionaries: [];
}

const initialState: IDictionaryState = {
  dictionaries: null,
} as IDictionaryState;

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    setDictionaries(state, action) {
      state.dictionaries = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(dictionaryApi.endpoints.createDictionary.matchFulfilled, (state, action) => {
      state.dictionaries = action.payload.data;
    });
    builder.addMatcher(dictionaryApi.endpoints.getDictionaryData.matchFulfilled, (state, action: any) => {
      state.dictionaries = action.payload.data;
    });
  },
});

export default dictionarySlice.reducer;
export const { setDictionaries } = dictionarySlice.actions;
