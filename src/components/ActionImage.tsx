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
        <RockWrapper src="/rock.webp" alt="Image of Rocks"/>
      ) : action === ACTIONS.PAPER ? (
        <ImageWrapper src="/paper.webp" alt="Image of Paper" />
      ) : action === ACTIONS.SCISSORS ? (
        <ScissorsWrapper src="/scissors.webp" alt="Image of Scissors" />
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

const RockWrapper = styled(ImageWrapper)`
  top: -20px;
`
const ScissorsWrapper = styled(ImageWrapper)`
  top: -35px;
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
