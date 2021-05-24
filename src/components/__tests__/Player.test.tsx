import { render, screen } from "@testing-library/react";
import Player from "../Player";

it("Render Player", () => {
  render(<Player>Player</Player>)
  expect(screen.getByText(/Player/i)).toBeInTheDocument()
})
