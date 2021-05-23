import styled from "styled-components"
import COLORS from "../styles/colors"
import BREAKPOINTS from "../styles/breakpoints"

type PlayerProps = {
  children: React.ReactNode;
};

export default function Player({ children }: PlayerProps) {
  return <PlayerWrapper>{children}</PlayerWrapper>;
}

export const PlayerWrapper = styled.div`
  margin: 54px 36px 36px;
  padding: 12px;
  width: 300px;
  height: 328px;
  background-color: ${COLORS.white};
  border: 3px solid ${COLORS.primaryLight};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.8);
  border-radius: 16px;

  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    margin: 16px 36px;
  }
`;
