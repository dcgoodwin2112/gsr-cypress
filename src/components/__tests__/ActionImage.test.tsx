import { cleanup, render, screen } from "@testing-library/react";
import ActionImage from "../ActionImage";
import { ACTIONS } from "../../lib/game";

it("Render ActionImage", () => {
  render(<ActionImage action={ACTIONS.RESET}>Placeholder</ActionImage>);
  expect(screen.getByText(/Placeholder/i)).toBeInTheDocument();

  render(<ActionImage action={ACTIONS.ROCK}>Placeholder</ActionImage>);
  expect(screen.getByAltText(/Image of Rocks/i)).toBeInTheDocument()
});
