import { render, screen } from "@testing-library/react";
import GameInfoItem from "../GameInfoItem";

it("Render GameInfoItem", () => {
  render(<GameInfoItem amount={1}>amount</GameInfoItem>);
  expect(screen.getByText(/1/i)).toBeInTheDocument();
  expect(screen.getByText(/amount/i)).toBeInTheDocument();
})
