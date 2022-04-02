import React from "react";
import LetterBlock from "../LetterBlock";
import { useDispatch } from "react-redux";
import { unlockKeyboard } from "../../store/word/slice";
import { setGameStatus } from "../../store/game/slice";
import { Div } from "./styles";
import {
  WORD_LENGTH,
  WORD_COUNT,
  LetterStatus,
  GameStatus,
} from "../../utils/constants";

const Word = ({ word, index, isGuessed, result }) => {
  const dispatch = useDispatch();

  const onFlip = (letterIndex) => {
    if (letterIndex === WORD_LENGTH - 1) {
      const isCorrect = result.every((r) => r === LetterStatus.CORRECT);

      if (isCorrect) {
        dispatch(setGameStatus(GameStatus.WON));
        return;
      }

      if (index === WORD_COUNT - 1 && !isCorrect) {
        dispatch(setGameStatus(GameStatus.LOST));
        return;
      }

      dispatch(unlockKeyboard());
    }
  };

  return (
    <Div>
      {[...Array(WORD_LENGTH)].map((n, letterIndex) => (
        <LetterBlock
          key={letterIndex}
          index={letterIndex}
          letter={word && word[letterIndex]}
          result={result && result[letterIndex]}
          isGuessed={isGuessed}
          onFlip={onFlip}
        />
      ))}
    </Div>
  );
};

export default Word;
