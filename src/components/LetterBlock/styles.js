import styled, { keyframes, css } from "styled-components";
import { pulse, flipInX } from "react-animations";
import { Colors, LetterStatus } from "../../utils/constants";
const pulseKeyframe = keyframes`${pulse}`;

const pulseStyle = css`
  animation: ${pulseKeyframe} 0.3s linear;
`;

const flipKeyframe = keyframes`${flipInX}`;

const flipStyle = css`
  animation: ${flipKeyframe} 0.3s ease-in-out;
`;

export const Div = styled.div`
  border-radius: 5px;
  width: 100%;
  line-height: 2rem;
  font-size: 2rem;
  vertical-align: middle;
  box-sizing: border-box;
  user-select: none;
  background-color: transparent;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  ${(props) => (props.shouldPulse ? pulseStyle : "")};
  ${(props) => (props.shouldFlip ? flipStyle : "")}
  background-color: ${(props) => {
    if (props.shouldFlip) {
      switch (props.result) {
        case LetterStatus.CORRECT:
          return Colors.correct;
        case LetterStatus.PRESENT:
          return Colors.present;
        case LetterStatus.ABSENT:
          return Colors.absent;
        default:
          return Colors.cream;
      }
    }

    return Colors.cream;
  }};
`;
