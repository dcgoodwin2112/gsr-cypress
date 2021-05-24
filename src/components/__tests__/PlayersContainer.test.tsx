import { render, screen } from "@testing-library/react";
import PlayersContainer from "../PlayersContainer";

it("Render PlayerContainer", () => {
  render(<PlayersContainer>Players</PlayersContainer>);
  expect(screen.getByText(/Players/i)).toBeInTheDocument();
})
