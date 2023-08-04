import { createSlice } from "@reduxjs/toolkit";

import { wordApi } from "./api";

interface IWordState {
  word: [];
}

const initialState: IWordState = {
  word: null,
} as IWordState;

const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    setDictionaries(state, action) {
      state.word = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(wordApi.endpoints.createWord.matchFulfilled, (state, action) => {
      state.word = action.payload.data;
    });
    builder.addMatcher(wordApi.endpoints.getWordData.matchFulfilled, (state, action: any) => {
      state.word = action.payload.data;
    });
  },
});

export default wordSlice.reducer;
export const { setDictionaries } = wordSlice.actions;
