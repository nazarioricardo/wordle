import { createSlice } from "@reduxjs/toolkit";
const WORD = "depot";

const initialState = {
  targetWord: WORD,
  currentWord: [],
  wordIndex: 0,
  letterIndex: 0,
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
  },
});

export const { addLetter, removeLetter } = wordSlice.actions;

export default wordSlice.reducer;
