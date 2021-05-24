import { render, screen } from "@testing-library/react";
import ActionLabel from "../ActionLabel";

it("Renders ActionLabel", () => {
  render(<ActionLabel>Label</ActionLabel>);
  expect(screen.getByText(/Label/i)).toBeInTheDocument();

  render(<ActionLabel active={true}>ActiveLabel</ActionLabel>);
  expect(screen.getByText(/ActiveLabel/i)).toBeInTheDocument();
});
