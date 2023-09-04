import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ProfileState {
  token: string;
}

const initialState: ProfileState = {
  token: null,
};

export const ProfileSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = ProfileSlice.actions;

export default ProfileSlice.reducer;
