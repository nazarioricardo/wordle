import { createSlice } from "@reduxjs/toolkit";
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
      if (state.currentWord.length < 5) {
        state.currentWord.push(action.payload);
      }
    },

    removeLetter: (state) => {
      state.currentWord.pop();
    },

    enterWord: (state) => {
      if (state.currentWord.length === 5) {
        state.guesses.push(state.currentWord);
        state.currentWord = [];
        state.activeIndex++;
      }
    },
  },
});

export const { addLetter, removeLetter, enterWord } = wordSlice.actions;

export default wordSlice.reducer;
