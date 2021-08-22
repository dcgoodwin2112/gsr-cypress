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
      return "Choose an action to begin.";
    case RESULTS.LOSE:
      return "CPU Wins! Player 1 has been defeated.";
    case RESULTS.DRAW:
      return "This match is a Draw!";
    case RESULTS.WIN:
      return "Player 1 wins! The CPU has been defeated.";
  }
}

function getPlayerMessage(action: ACTIONS, player: Player) {
  const playerName = (player === 'player') ? 'Player 1' : 'CPU';
  switch (action) {
    case ACTIONS.RESET:
      return "";
    case ACTIONS.ROCK:
      return `${playerName} has requested Rock.`;
    case ACTIONS.PAPER:
      return `${playerName} has picked Paper.`;
    case ACTIONS.SCISSORS:
      return `${playerName} has selected Scissors.`;
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
  max-width: 600px;
  margin: 36px auto;
  text-align: center;
  min-height: 62px;
`;
