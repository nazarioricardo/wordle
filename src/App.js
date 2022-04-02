import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLetter, removeLetter, enterWord } from "./store/word/slice";
import {
  selectCurrentWord,
  selectActiveIndex,
  selectGuesses,
  selectResults,
} from "./store/word/selectors";
import { selectGameStatus } from "./store/game/selectors";
import WordGrid from "./components/WordGrid";
import Keyboard from "./components/Keyboard";
import { isBackspace, isEnter, isLetter } from "./utils/keys";
import { GameStatus, WORD_COUNT } from "./utils/constants";
import "./App.css";

function App() {
  const activeIndex = useSelector(selectActiveIndex);
  const currentWord = useSelector(selectCurrentWord);
  const results = useSelector(selectResults);
  const guesses = useSelector(selectGuesses);
  const gameStatus = useSelector(selectGameStatus);
  const dispatch = useDispatch();

  const onKeyPressed = useCallback(
    (event) => {
      if (gameStatus !== GameStatus.PLAYING) {
        return;
      }

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
    },
    [dispatch, gameStatus]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyPressed);

    return () => {
      document.removeEventListener("keydown", onKeyPressed);
    };
  }, [onKeyPressed]);

  return (
    <div className="App">
      <WordGrid
        count={WORD_COUNT}
        activeIndex={activeIndex}
        currentWord={currentWord}
        results={results}
        guesses={guesses}
      />
      {/* </div> */}
      <Keyboard />
    </div>
  );
}

export default App;
