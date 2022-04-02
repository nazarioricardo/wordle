import React from "react";
import { Button } from "./styles";

const ActionKey = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ActionKey;
