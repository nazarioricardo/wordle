import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import wordReducer from "./wordSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    word: wordReducer,
  },
});
