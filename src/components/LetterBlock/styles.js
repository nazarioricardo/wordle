import styled, { keyframes, css } from "styled-components";
import { pulse } from "react-animations";

const pulseKeyframe = keyframes`${pulse}`;

const pulseStyle = css`
  animation: ${pulseKeyframe} 0.6s linear;
`;

export const Div = styled.div`
  border: 10px solid black;
  height: 100px;
  width: 100px;
  margin: 10px;
  background-color: transparent;
  text-align: center;
  ${(props) => (props.shouldPulse ? pulseStyle : "")};
`;
