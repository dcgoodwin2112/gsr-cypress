import styled from "styled-components";
import COLORS from "../styles/colors";
import { ACTIONS, RESULTS } from "../lib/game";

type GameStatusContainerProps = {
  cpu: ACTIONS;
  player: ACTIONS;
  result: RESULTS;
};

type Player = "player" | "cpu";

function getResultMessage(result: RESULTS) {
  switch (result) {
    case RESULTS.INIT:
      return "Click a Cat button to begin.";
    case RESULTS.LOSE:
      return "Catputer Wins! Kitty 1 has been defeated.";
    case RESULTS.DRAW:
      return "This match is a Draw!";
    case RESULTS.WIN:
      return "Kitty 1 wins! Catputer has been defeated.";
  }
}

function getPlayerMessage(action: ACTIONS, player: Player) {
  const playerName = (player === 'player') ? 'Kitty 1' : 'Catputer';
  switch (action) {
    case ACTIONS.RESET:
      return "";
    case ACTIONS.GOOD:
      return `${playerName} is feeling nice today.`;
    case ACTIONS.SAD:
      return `${playerName} is a bit under the weather.`;
    case ACTIONS.RAD:
      return `${playerName} is too cool for kitten school.`;
  }
}

export default function GameStatusContainer({
  cpu,
  player,
  result,
}: GameStatusContainerProps) {
  const resultMessage = getResultMessage(result);
  const playerMessage = getPlayerMessage(player, 'player');
  const cpuMessage = getPlayerMessage(cpu, "cpu");

  return (
    <GameStatusWrapper role="alert" data-cy="game-status">
      <p>{resultMessage}</p>
      <p>{playerMessage} {cpuMessage}</p>
    </GameStatusWrapper>
  );
}

const GameStatusWrapper = styled.div`
  color: ${COLORS.white};
  font-size: 1.2rem;
  max-width: 700px;
  margin: 36px auto;
  text-align: center;
  min-height: 62px;
`;
