import styled from "styled-components";
import { Colors } from "../../utils/constants";

export const StyledHeader = styled.header`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  color: ${Colors.cream};
  font-size: 1rem;
`;
