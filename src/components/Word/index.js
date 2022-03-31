import React from "react";
import LetterBlock from "../LetterBlock";
import { useDispatch } from "react-redux";
import { unlockKeyboard } from "../../store/slice";

import { Div } from "./styles";
import { WORD_LENGTH, WORD_COUNT, LetterStatus } from "../../utils/constants";

const Word = ({ word, index, isGuessed, result }) => {
  const dispatch = useDispatch();

  const onFlip = (letterIndex) => {
    if (letterIndex === WORD_LENGTH - 1) {
      const isCorrect = result.every((r) => r === LetterStatus.CORRECT);

      if (isCorrect) {
        console.log("YOU WON");
        return;
      }

      if (index === WORD_COUNT - 1 && !isCorrect) {
        console.log("You lost...");
        return;
      }

      dispatch(unlockKeyboard());
    }
  };

  return (
    <Div>
      {[...Array(WORD_LENGTH)].map((n, index) => (
        <LetterBlock
          key={index}
          index={index}
          letter={word && word[index]}
          result={result && result[index]}
          isGuessed={isGuessed}
          onFlip={index === WORD_COUNT - 1 ? onFlip : null}
        />
      ))}
    </Div>
  );
};

export default Word;
