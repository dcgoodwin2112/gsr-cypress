import { render, screen } from "@testing-library/react";
import ActionResult from "../ActionResult";
import { RESULTS } from "../../lib/game";

it("Render ActionResult", () => {
  render(<ActionResult result={RESULTS.INIT} />);
  expect(screen.getByText(/Ready!/i)).toBeInTheDocument();

  render(<ActionResult result={RESULTS.LOSE} />);
  expect(screen.getByText(/Loser!/i)).toBeInTheDocument();

  render(<ActionResult result={RESULTS.DRAW} />);
  expect(screen.getByText(/Draw!/i)).toBeInTheDocument();

  render(<ActionResult result={RESULTS.WIN} />);
  expect(screen.getByText(/Winner!/i)).toBeInTheDocument();
});
