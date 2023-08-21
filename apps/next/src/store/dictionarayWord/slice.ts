import { dictionaryWordApi } from "./api";
import { type DictionaryWord } from "./type";
import { createSlice } from "@reduxjs/toolkit";

interface IWordState {
  dictionaryWords: { numberOfWords: number; words: DictionaryWord[] } | null;
}

const initialState: IWordState = {
  dictionaryWords: null,
} as IWordState;

const userDicWordSlice = createSlice({
  name: "dicWord",
  initialState,
  reducers: {
    setDicWords(state, action) {
      state.dictionaryWords = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      dictionaryWordApi.endpoints.getDictionaryWords.matchFulfilled,
      (state, action: any) => {
        state.dictionaryWords = action.payload.data;
      }
    );
  },
});

export default userDicWordSlice.reducer;
export const { setDicWords } = userDicWordSlice.actions;
