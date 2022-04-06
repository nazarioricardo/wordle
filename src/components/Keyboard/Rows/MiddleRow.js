import React from "react";
import LetterKey from "../Keys/LetterKey";
import { LetterContainer } from "./styles";

const Middlediv = () => {
  return (
    <div>
      <LetterContainer>
        <LetterKey letter={"a"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"s"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"d"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"f"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"g"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"h"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"j"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"k"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"l"} />
      </LetterContainer>
    </div>
  );
};

export default Middlediv;
