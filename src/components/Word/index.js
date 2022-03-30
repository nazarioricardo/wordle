import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterBlock from "../LetterBlock";
import Div from "./styles";
import { WORD_LENGTH } from "../../utils/constants";
import { selectCurrentWord, selectTargetWord } from "../../store/selectors";

const Word = ({ word, isGuessed }) => {
  const currentWord = useSelector(selectCurrentWord);
  const targetWord = useSelector(selectTargetWord);
  useEffect(() => {
    if (isGuessed) {
      // Animate Squares
      // Disable keyboard while animating
      // Compare each letter
      // When done, check if won, or lost
    }
  }, [isGuessed]);

  return (
    <Div>
      {[...Array(WORD_LENGTH)].map((n, index) => (
        <LetterBlock key={index} letter={word && word[index]} />
      ))}
    </Div>
  );
};

export default Word;
