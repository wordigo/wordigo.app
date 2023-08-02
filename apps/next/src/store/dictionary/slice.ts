import { dictionaryApi } from "./api";
import { createSlice } from "@reduxjs/toolkit";

interface IDictionary {
    dictionary: [];
}

const initialState = {
    dictionary: [] as IDictionary[],
};

const dictionarySlice = createSlice({
    name: "dictionary",
    initialState,
    reducers: {
        setDictionary(state, action) {
            state.dictionary = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            dictionaryApi.endpoints.createDictionary.matchFulfilled,
            (state, action) => {
                state.dictionary = action.payload.data;
            }
        );
        builder.addMatcher(
            dictionaryApi.endpoints.getDictionaryData.matchFulfilled,
            (state, action: any) => {
                state.dictionary = action.payload.data;
            }
        );
    },
});

export default dictionarySlice.reducer;
export const { setDictionary } = dictionarySlice.actions;