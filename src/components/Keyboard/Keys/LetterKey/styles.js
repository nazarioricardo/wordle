import styled from "styled-components";
import { Colors, LetterStatus } from "../../../../utils/constants";
import { Key } from "../styles";

export const Button = styled.button`
  ${Key}
  max-width: 40px;
  width: 100%;
  text-transform: uppercase;
  background-color: ${(props) => {
    switch (props.status) {
      case LetterStatus.ABSENT:
        return Colors.absent;
      case LetterStatus.CORRECT:
        return Colors.correct;
      case LetterStatus.PRESENT:
        return Colors.present;
      default:
        return Colors.cream;
    }
  }};
`;
