import React from "react";
import LetterKey from "../Keys/LetterKey";
import { LetterContainer } from "./styles";

const TopRow = () => {
  return (
    <div>
      <LetterContainer>
        <LetterKey letter={"Q"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"W"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"E"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"R"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"T"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"Y"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"U"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"I"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"O"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"P"} />
      </LetterContainer>
    </div>
  );
};

export default TopRow;
