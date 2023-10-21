import { feedbackApi } from "./api";
import { type FeedBack } from "./type";
import { createSlice } from "@reduxjs/toolkit";

interface IWordState {
  feedback: any;
}

const initialState: IWordState = {
  feedback: null,
} as IWordState;

const feedbackSlice = createSlice({
  name: "FeedBack",
  initialState,
  reducers: {
    setFeedback(state, action) {
      state.feedback = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      feedbackApi.endpoints.postFeedBack.matchFulfilled,
      (state, action: any) => {
        state.feedback = action.payload.data;
      }
    );
  },
});

export default feedbackSlice.reducer;
export const { setFeedback } = feedbackSlice.actions;
