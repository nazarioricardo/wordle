import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLetter } from "../../../../store/word/slice";
import { selectAlphabet } from "../../../../store/word/selectors";
import { Button } from "./styles";

const LetterKey = ({ letter }) => {
  const dispatch = useDispatch();
  const status = useSelector(selectAlphabet)[letter];

  const onClick = () => {
    dispatch(addLetter(letter));
  };
  return (
    <Button onClick={onClick} status={status}>
      {letter}
    </Button>
  );
};

export default LetterKey;
