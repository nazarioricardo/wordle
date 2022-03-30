import { createSlice } from "@reduxjs/toolkit";
import { WORD_LENGTH } from "../utils/constants";
const WORD = ["d", "e", "p", "o", "t"];

const initialState = {
  target: WORD,
  current: [],
  guesses: [],
  index: 0,
};

export const slice = createSlice({
  name: "word",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      if (state.current.length < WORD_LENGTH) {
        state.current.push(action.payload);
      }
    },

    removeLetter: (state) => {
      state.current.pop();
    },

    enterWord: (state) => {
      if (state.currentWord.length === WORD_LENGTH) {
        state.guesses.push(state.currentWord);
        state.current = [];
        state.index++;
      }
    },
  },
});

export const { addLetter, removeLetter, enterWord } = slice.actions;

export default slice.reducer;
