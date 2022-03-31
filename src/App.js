import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLetter, removeLetter, enterWord } from "./store/word/slice";
import {
  selectCurrentWord,
  selectActiveIndex,
  selectGuesses,
  selectResults,
} from "./store/word/selectors";
import WordGrid from "./components/WordGrid";
import { isBackspace, isEnter, isLetter } from "./utils/keys";
import { WORD_COUNT } from "./utils/constants";
import "./App.css";

function App() {
  const activeIndex = useSelector(selectActiveIndex);
  const currentWord = useSelector(selectCurrentWord);
  const results = useSelector(selectResults);
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
      <WordGrid
        count={WORD_COUNT}
        activeIndex={activeIndex}
        currentWord={currentWord}
        results={results}
        guesses={guesses}
      />
    </div>
  );
}

export default App;
