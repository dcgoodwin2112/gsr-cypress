import styled from "styled-components";
import COLORS from "../styles/colors";
import BREAKPOINTS from "../styles/breakpoints";
import { WithChildrenProps } from "../types";

export default function GameInfoContainer({ children }: WithChildrenProps) {
  return <GameInfoWrapper>{children}</GameInfoWrapper>;
}

const GameInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${COLORS.primaryDark};
  border: 3px solid ${COLORS.primaryLight};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.8);
  border-radius: 16px;
  color: ${COLORS.white};
  margin: 0 auto;
  max-width: 400px;
  height: 56px;
  position: relative;
  top: -16px;

  @media screen and (max-width: ${BREAKPOINTS.lg}px) {
    position: sticky;
    top: 0;
    z-index: 2;
    border-radius: 0;
    min-width: unset;
    max-width: unset;
  }
`;
