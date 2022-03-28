import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLetter, removeLetter, enterWord } from "./store/wordSlice";
import {
  selectCurrentWord,
  selectActiveIndex,
  selectGuesses,
} from "./store/selectors";
import Word from "./components/Word";
import { isBackspace, isEnter, isLetter } from "./utils/keys";
import { WORD_COUNT } from "./utils/constants";
import "./App.css";

function App() {
  const activeIndex = useSelector(selectActiveIndex);
  const currentWord = useSelector(selectCurrentWord);
  const guesses = useSelector(selectGuesses);
  const dispatch = useDispatch();

  const onKeyPressed = (event) => {
    const { key } = event;
    if (isLetter(key)) {
      dispatch(addLetter(key));
    }

    if (isBackspace(key)) {
      dispatch(removeLetter());
    }

    if (isEnter(key)) {
      dispatch(enterWord());
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyPressed);

    return () => {
      document.removeEventListener("keydown", onKeyPressed);
    };
  }, []);

  return (
    <div className="App">
      {[...Array(WORD_COUNT)].map((n, index) => {
        const isActive = index === activeIndex;
        const isGuessed = index < activeIndex;
        const displayWord = () => {
          if (isActive && currentWord) {
            return currentWord;
          }

          if (isGuessed) {
            return guesses[index];
          }

          return "";
        };
        return (
          <Word
            key={index}
            word={displayWord()}
            isActive={isActive}
            isGuessed={isGuessed}
          />
        );
      })}
    </div>
  );
}

export default App;
