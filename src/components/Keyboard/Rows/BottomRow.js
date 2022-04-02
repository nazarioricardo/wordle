import React from "react";
import { useDispatch } from "react-redux";
import ActionKey from "../Keys/ActionKey";
import LetterKey from "../Keys/LetterKey";
import { enterWord, removeLetter } from "../../../store/word/slice";

const BottomRow = () => {
  const dispatch = useDispatch();
  const onClickEnter = () => {
    dispatch(enterWord());
  };

  const onClickBackspace = () => {
    dispatch(removeLetter());
  };

  return (
    <div>
      <ActionKey onClick={onClickEnter}>Enter</ActionKey>
      <LetterKey letter={"Z"} />
      <LetterKey letter={"X"} />
      <LetterKey letter={"C"} />
      <LetterKey letter={"V"} />
      <LetterKey letter={"B"} />
      <LetterKey letter={"N"} />
      <LetterKey letter={"M"} />
      <ActionKey onClick={onClickBackspace}>Delete</ActionKey>
    </div>
  );
};

export default BottomRow;
