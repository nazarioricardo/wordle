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
      {[...Array(5)].map((n, index) => {
        const displayWord = () => {
          if (index === activeIndex && currentWord) {
            return currentWord;
          }

          if (index < activeIndex) {
            return guesses[index];
          }

          return "";
        };
        return <Word key={index} word={displayWord()} />;
      })}
    </div>
  );
}

export default App;
