import React from "react";
import LetterBlock from "../LetterBlock";
import StyledDiv from "./styles";

const Word = () => {
  return (
    <StyledDiv>
      {[...Array(5)].map((n, index) => (
        <LetterBlock key={index} />
      ))}
    </StyledDiv>
  );
};

export default Word;
