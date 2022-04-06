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
        <LetterKey letter={"z"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"x"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"c"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"v"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"b"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"n"} />
      </LetterContainer>
      <LetterContainer>
        <LetterKey letter={"m"} />
      </LetterContainer>
      <ActionContainer>
        <ActionKey onClick={onClickBackspace}>Delete</ActionKey>
      </ActionContainer>
    </div>
  );
};

export default Bottomdiv;
