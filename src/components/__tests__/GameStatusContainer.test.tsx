import { render, screen } from "@testing-library/react";
import GameStatusContainer from "../GameStatusContainer";
import { ACTIONS, RESULTS } from "../../lib/game";

it("Render GameStatusContainer Game Reset", () => {
  render(
    <GameStatusContainer
      player={ACTIONS.RESET}
      cpu={ACTIONS.RESET}
      result={RESULTS.INIT}
    ></GameStatusContainer>
  );
  expect(screen.getByText(/Choose an action to begin/i)).toBeInTheDocument();
});

it("Render GameStatusContainer CPU Wins", () => {
  render(
    <GameStatusContainer
      player={ACTIONS.SCISSORS}
      cpu={ACTIONS.ROCK}
      result={RESULTS.LOSE}
    ></GameStatusContainer>
  );
  expect(
    screen.getByText(/CPU Wins! Player 1 has been defeated./i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Player 1 has selected Scissors. CPU has requested Rock./i)
  ).toBeInTheDocument();
});

it("Render GameStatusContainer Player 1 Wins", () => {
  render(
    <GameStatusContainer
      player={ACTIONS.ROCK}
      cpu={ACTIONS.SCISSORS}
      result={RESULTS.WIN}
    ></GameStatusContainer>
  );
  expect(
    screen.getByText(/Player 1 wins! The CPU has been defeated./i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Player 1 has requested Rock. CPU has selected Scissors./i)
  ).toBeInTheDocument();
});

it("Render GameStatusContainer Draw", () => {
  render(
    <GameStatusContainer
      player={ACTIONS.ROCK}
      cpu={ACTIONS.ROCK}
      result={RESULTS.DRAW}
    ></GameStatusContainer>
  );
  expect(screen.getByText(/This match is a Draw!/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Player 1 has requested Rock. CPU has requested Rock./i)
  ).toBeInTheDocument();
});
