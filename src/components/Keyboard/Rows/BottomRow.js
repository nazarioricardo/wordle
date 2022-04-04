import React from "react";
import { useDispatch } from "react-redux";
import ActionKey from "../Keys/ActionKey";
import LetterKey from "../Keys/LetterKey";
import { enterWord, removeLetter } from "../../../store/word/slice";
import { LetterContainer, ActionContainer } from "./styles";

const Bottomdiv = () => {
  const dispatch = useDispatch();
  const onClickEnter = () => {
    dispatch(enterWord());
  };

  const onClickBackspace = () => {
    dispatch(removeLetter());
  };

  return (
    <div>
      <ActionContainer>
        <ActionKey onClick={onClickEnter}>Enter</ActionKey>
      </ActionContainer>
      <LetterContainer>
        <LetterKey letter={"Z"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"X"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"C"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"V"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"B"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"N"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"M"} />
      </LetterContainer>
      <ActionContainer>
        <ActionKey onClick={onClickBackspace}>Delete</ActionKey>
      </ActionContainer>
    </div>
  );
};

export default Bottomdiv;
