import { render, screen } from "@testing-library/react";
import GameInfoContainer from "../GameInfoContainer";

it("Render GameInfoContainer", () => {
  render(<GameInfoContainer>SingleChild</GameInfoContainer>);
  expect(screen.getByText(/SingleChild/i)).toBeInTheDocument();

  const ChildOne = () => <p>ChildOne</p>;
  const ChildTwo = () => <p>ChildTwo</p>;

  render(
    <GameInfoContainer>
      <ChildOne />
      <ChildTwo />
    </GameInfoContainer>
  );

  // Test GameInfoContainer with multiple children
  expect(screen.getByText(/ChildOne/i)).toBeInTheDocument();
  expect(screen.getByText(/ChildTwo/i)).toBeInTheDocument();
});
