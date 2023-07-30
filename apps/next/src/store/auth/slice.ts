import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthStateType {
  token: string;
}

const initialState: AuthStateType = {
  token: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state: AuthStateType, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const { setToken } = AuthSlice.actions;

export default AuthSlice.reducer;
