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
  expect(screen.getByText(/Click a Cat button to begin/i)).toBeInTheDocument();
});

it("Render GameStatusContainer CPU Wins", () => {
  render(
    <GameStatusContainer
      player={ACTIONS.RAD}
      cpu={ACTIONS.GOOD}
      result={RESULTS.LOSE}
    ></GameStatusContainer>
  );
  expect(
    screen.getByText(/Catputer Wins! Kitty 1 has been defeated./i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Kitty 1 is too cool for kitten school. Catputer is feeling nice today./i)
  ).toBeInTheDocument();
});

it("Render GameStatusContainer Player 1 Wins", () => {
  render(
    <GameStatusContainer
      player={ACTIONS.GOOD}
      cpu={ACTIONS.RAD}
      result={RESULTS.WIN}
    ></GameStatusContainer>
  );
  expect(
    screen.getByText(/Kitty 1 wins! Catputer has been defeated./i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Kitty 1 is feeling nice today. Catputer is too cool for kitten school./i)
  ).toBeInTheDocument();
});

it("Render GameStatusContainer Draw", () => {
  render(
    <GameStatusContainer
      player={ACTIONS.GOOD}
      cpu={ACTIONS.GOOD}
      result={RESULTS.DRAW}
    ></GameStatusContainer>
  );
  expect(screen.getByText(/This match is a Draw!/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Kitty 1 is feeling nice today. Catputer is feeling nice today./i)
  ).toBeInTheDocument();
});
