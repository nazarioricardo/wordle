import { createSlice } from "@reduxjs/toolkit";
import { GameStatus } from "../../utils/constants";

const initialState = {
  status: GameStatus.PLAYING,
};

export const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setGameStatus } = slice.actions;

export default slice.reducer;
