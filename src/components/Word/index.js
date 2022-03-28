import React from "react";
import LetterBlock from "../LetterBlock";
import StyledDiv from "./styles";

const Word = ({ word }) => {
  return (
    <StyledDiv>
      {[...Array(5)].map((n, index) => (
        <LetterBlock key={index} letter={word && word[index]} />
      ))}
    </StyledDiv>
  );
};

export default Word;
