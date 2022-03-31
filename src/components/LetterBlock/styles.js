import styled, { keyframes, css } from "styled-components";
import { pulse, flipInX } from "react-animations";
import { LetterStatus } from "../../utils/constants";
const pulseKeyframe = keyframes`${pulse}`;

const pulseStyle = css`
  animation: ${pulseKeyframe} 0.3s linear;
`;

const flipKeyframe = keyframes`
  from {
    transform: scaleY(0);
  };

  to {
    transform: scaleY(1);
  }
`;

const flipStyle = css`
  animation: ${flipKeyframe} 0.3s ease-in-out;
`;

export const Div = styled.div`
  border: 10px solid black;
  height: 100px;
  width: 100px;
  margin: 10px;
  font-size: 48px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.shouldPulse ? pulseStyle : "")};
  ${(props) => (props.shouldFlip ? flipStyle : "")}
  background-color: ${(props) => {
    if (props.shouldFlip) {
      switch (props.result) {
        case LetterStatus.CORRECT:
          return "green";
        case LetterStatus.PRESENT:
          return "yellow";
        case LetterStatus.ABSENT:
          return "gray";
        default:
          return "transparent";
      }
    }

    return "transparent";
  }};
`;
