import { createSlice } from "@reduxjs/toolkit";
import { WORD_LENGTH } from "../utils/constants";
import { getWordResults } from "../utils/getWordResults";
const WORD = ["d", "e", "p", "o", "t"];

const initialState = {
  target: WORD,
  current: [],
  guesses: [],
  results: [],
  keyboardIsLocked: false,
  index: 0,
};

export const slice = createSlice({
  name: "word",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      if (state.keyboardIsLocked) {
        console.log(state.keyboardIsLocked);
        return;
      }

      if (state.current.length < WORD_LENGTH) {
        state.current.push(action.payload);
      }
    },

    removeLetter: (state) => {
      state.current.pop();
    },

    enterWord: (state) => {
      if (state.current.length === WORD_LENGTH) {
        state.keyboardIsLocked = true;
        state.guesses.push(state.current);
        state.results.push(getWordResults(state.target, state.current));
        state.current = [];
        state.index++;
      }
    },

    unlockKeyboard: (state) => {
      state.keyboardIsLocked = false;
    },
  },
});

export const { addLetter, removeLetter, enterWord, unlockKeyboard } =
  slice.actions;

export default slice.reducer;
