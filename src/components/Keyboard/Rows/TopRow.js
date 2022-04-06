import React from "react";
import LetterKey from "../Keys/LetterKey";
import { LetterContainer } from "./styles";

const TopRow = () => {
  return (
    <div>
      <LetterContainer>
        <LetterKey letter={"q"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"w"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"e"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"r"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"t"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"y"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"u"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"i"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"o"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"p"} />
      </LetterContainer>
    </div>
  );
};

export default TopRow;
