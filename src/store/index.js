import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "./word/slice";
import gameReducer from "./game/slice";

export const store = configureStore({
  reducer: {
    word: wordReducer,
    game: gameReducer,
  },
});

// export const store = configureStore({
//   reducer: {
//     word: wordReducer,
//   },
// });
