import { computedDictionaries } from "@/utils/computedDictionaries";
import { createSlice } from "@reduxjs/toolkit";
import { dictionaryApi } from "./api";
import { type Dictionary } from "./type";

interface IDictionaryState {
  dictionaries: Dictionary[] | null;
  dictionaryDetail: Dictionary | null;
}

const initialState: IDictionaryState = {
  dictionaries: null,
  dictionaryDetail: null,
} as IDictionaryState;

const dictionarySlice = createSlice({
  name: "dictionaries",
  initialState,
  reducers: {
    setDictionaries(state, action) {
      state.dictionaries = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      dictionaryApi.endpoints.getDictionaries.matchFulfilled,
      (state, action) => {
        state.dictionaries = computedDictionaries(action.payload.data);
      }
    );
    builder.addMatcher(
      dictionaryApi.endpoints.getDictionaryDetail.matchFulfilled,
      (state, action) => {
        state.dictionaryDetail = action.payload.data
      }
    );
  },
});

export default dictionarySlice.reducer;
export const { setDictionaries } = dictionarySlice.actions;
