import styled from "styled-components";
import BREAKPOINTS from "../styles/breakpoints";
import { WithChildrenProps } from "../types";

export default function PlayersContainer({ children }: WithChildrenProps) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    flex-direction: column-reverse;
    padding: 0 36px;
  }
`;
