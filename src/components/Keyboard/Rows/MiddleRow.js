import React from "react";
import LetterKey from "../Keys/LetterKey";
import { LetterContainer } from "./styles";

const Middlediv = () => {
  return (
    <div>
      <LetterContainer>
        <LetterKey letter={"A"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"S"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"D"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"F"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"G"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"H"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"J"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"K"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"L"} />
      </LetterContainer>
    </div>
  );
};

export default Middlediv;
