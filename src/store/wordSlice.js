import { createSlice } from "@reduxjs/toolkit";
import { WORD_COUNT, WORD_LENGTH } from "../utils/constants";
const WORD = "depot";

const initialState = {
  targetWord: WORD,
  currentWord: [],
  guesses: [],
  activeIndex: 0,
};

export const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      if (state.currentWord.length < WORD_LENGTH) {
        state.currentWord.push(action.payload);
      }
    },

    removeLetter: (state) => {
      state.currentWord.pop();
    },

    enterWord: (state) => {
      if (state.currentWord.length === WORD_LENGTH) {
        state.guesses.push(state.currentWord);
        state.currentWord = [];
        state.activeIndex++;
      }
    },
  },
});

export const { addLetter, removeLetter, enterWord } = wordSlice.actions;

export default wordSlice.reducer;
