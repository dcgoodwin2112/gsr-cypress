import styled from "styled-components";
import COLORS from "../styles/colors"
import { ACTIONS } from "../lib/game";

type ActionImageProps = {
  children: React.ReactNode;
  action: ACTIONS;
};

export default function ActionImage({ children, action }: ActionImageProps) {
  return (
    <Wrapper>
      {action === ACTIONS.ROCK ? (
        <ImageWrapper src="/rock.jpg" alt="Image of Rocks"/>
      ) : action === ACTIONS.PAPER ? (
        <ImageWrapper src="/paper.jpg" alt="Image of Paper" />
      ) : action === ACTIONS.SCISSORS ? (
        <ImageWrapper src="/scissors.jpg" alt="Image of Scissors" />
      ) : (
        <PlaceholderWrapper>{children}</PlaceholderWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 260px;
  overflow: hidden;
`;

const ImageWrapper = styled.img`
  position: relative;
`;

const PlaceholderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 270px;
  color: ${COLORS.primaryDark};
  font-size: 1.4rem;
  font-weight: 700;
`
