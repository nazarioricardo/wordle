import { createSlice } from "@reduxjs/toolkit";
import { WORD_LENGTH, LetterStatus } from "../../utils/constants";
import { getWordResults } from "../../utils/getWordResults";
const WORD = ["d", "e", "p", "o", "t"];

const initialState = {
  target: WORD,
  current: [],
  guesses: [],
  results: [],
  keyboardIsLocked: false,
  index: 0,
  alphabet: {
    a: LetterStatus.NULL,
    b: LetterStatus.NULL,
    c: LetterStatus.NULL,
    d: LetterStatus.NULL,
    e: LetterStatus.NULL,
    f: LetterStatus.NULL,
    g: LetterStatus.NULL,
    h: LetterStatus.NULL,
    i: LetterStatus.NULL,
    j: LetterStatus.NULL,
    k: LetterStatus.NULL,
    l: LetterStatus.NULL,
    m: LetterStatus.NULL,
    n: LetterStatus.NULL,
    o: LetterStatus.NULL,
    p: LetterStatus.NULL,
    q: LetterStatus.NULL,
    r: LetterStatus.NULL,
    s: LetterStatus.NULL,
    t: LetterStatus.NULL,
    u: LetterStatus.NULL,
    v: LetterStatus.NULL,
    w: LetterStatus.NULL,
    x: LetterStatus.NULL,
    y: LetterStatus.NULL,
    z: LetterStatus.NULL,
  },
};

export const slice = createSlice({
  name: "word",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      if (state.keyboardIsLocked) {
        return;
      }

      if (state.current.length < WORD_LENGTH) {
        state.current.push(action.payload.toLowerCase());
      }
    },

    removeLetter: (state) => {
      state.current.pop();
    },

    enterWord: (state) => {
      if (state.current.length === WORD_LENGTH) {
        state.keyboardIsLocked = true;
        state.guesses.push(state.current);
        const results = getWordResults(state.target, state.current);
        state.results.push(results);

        state.current.forEach((char, index) => {
          const result = results[index];

          switch (state.alphabet[char]) {
            case LetterStatus.CORRECT:
            case LetterStatus.ABSENT:
              return;
            case LetterStatus.NULL:
              state.alphabet[char] = result;
              return;
            case LetterStatus.PRESENT:
              if (result === LetterStatus.CORRECT) {
                state.alphabet[char] = result;
              }
          }

          state.alphabet[char] = results[index];
        });

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
