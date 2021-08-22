import styled from "styled-components";
import COLORS from "../styles/colors";
import { RESULTS } from "../lib/game";

type ActionResultProps = {
  result: RESULTS;
};

export default function ActionResult({ result }: ActionResultProps) {
  return (
    <ActionWrapper data-cy="action-result">
      {result === RESULTS.INIT
        ? "Ready!"
        : result === RESULTS.LOSE
        ? "Loser!"
        : result === RESULTS.DRAW
        ? "Draw!"
        : result === RESULTS.WIN
        ? "Winner!"
        : ""}
    </ActionWrapper>
  );
}

const ActionWrapper = styled.div`
  color: ${COLORS.white};
  font-weight: 700;
  font-size: 1.6rem;
  min-width: 100px;
  text-align: center;
`;
