import React from "react";
import ActionKey from "../Keys/ActionKey";
import LetterKey from "../Keys/LetterKey";

const BottomRow = () => {
  const onClickEnter = () => {
    console.log("Enter");
  };

  const onClickBackspace = () => {
    console.log("Backspace");
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
