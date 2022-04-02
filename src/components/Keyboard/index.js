import React from "react";
import BottomRow from "./Rows/BottomRow";
import MiddleRow from "./Rows/MiddleRow";
import TopRow from "./Rows/TopRow";
import { Div } from "./styles";
const Keyboard = () => {
  return (
    <Div>
      <TopRow />
      <MiddleRow />
      <BottomRow />
    </Div>
  );
};

export default Keyboard;
