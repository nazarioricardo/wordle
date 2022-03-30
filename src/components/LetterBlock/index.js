import React, { useEffect } from "react";
import { Div } from "./styles";

const LetterBlock = ({ letter }) => {
  const shouldPulse = Boolean(letter);
  return <Div shouldPulse={shouldPulse}>{letter}</Div>;
};

export default LetterBlock;
