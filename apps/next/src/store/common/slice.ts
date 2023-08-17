import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthStateType {
  language: string;
}

const initialState: AuthStateType = {
  language: null,
};

export const CommonSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLanguage(state: AuthStateType, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = CommonSlice.actions;

export default CommonSlice.reducer;
