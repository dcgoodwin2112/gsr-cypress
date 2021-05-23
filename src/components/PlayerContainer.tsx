import styled from "styled-components";
import BREAKPOINTS from "../styles/breakpoints";

type PlayerContainerProps = {
  children: React.ReactNode;
};

export default function PlayerContainer({ children }: PlayerContainerProps) {
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
