import React, { useEffect, useState, useCallback } from "react";
import { Div } from "./styles";

const LetterBlock = ({ index, letter, isGuessed, result, onFlip }) => {
  const [shouldFlip, setShouldFlip] = useState(false);
  const shouldPulse = Boolean(letter);

  const flip = useCallback(() => {
    setTimeout(() => {
      setShouldFlip(true);
      if (onFlip) {
        onFlip(index, result);
      }
    }, index * 200);
  }, [index, onFlip, result]);

  useEffect(() => {
    if (isGuessed) {
      flip();
    }
  }, [isGuessed, flip]);

  return (
    <Div shouldPulse={shouldPulse} shouldFlip={shouldFlip} result={result}>
      {letter && letter.toUpperCase()}
    </Div>
  );
};

export default LetterBlock;
