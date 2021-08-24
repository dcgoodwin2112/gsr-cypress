import { render, screen } from "@testing-library/react";
import ActionImage from "../ActionImage";
import { ACTIONS } from "../../lib/game";

it("Render ActionImage", () => {
  render(<ActionImage player="p1" action={ACTIONS.RESET}>Placeholder</ActionImage>);
  expect(screen.getByText(/Placeholder/i)).toBeInTheDocument();

  render(<ActionImage player="p1" action={ACTIONS.GOOD}>Placeholder</ActionImage>);
  expect(screen.getByAltText(/Good cat is a good kitty/i)).toBeInTheDocument()
});
