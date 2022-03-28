import React, { useEffect } from "react";
import LetterBlock from "../LetterBlock";
import Div from "./styles";
import { WORD_LENGTH } from "../../utils/constants";

const Word = ({ word, isGuessed }) => {
  useEffect(() => {
    console.log(word, isGuessed);
    if (isGuessed) {
      // Compare word
      // Animate Squares
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
