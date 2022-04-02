import React from "react";
import { useDispatch } from "react-redux";
import { addLetter } from "../../../../store/word/slice";
import { Button } from "./styles";

const LetterKey = ({ letter }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(addLetter(letter));
  };
  return <Button onClick={onClick}>{letter}</Button>;
};

export default LetterKey;
