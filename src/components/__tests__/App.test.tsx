import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

it("Render App and test button functionality", () => {
  render(<App />);
  // App loaded. Assert that initial state is true.
  expect(screen.getByText(/Ready Player 1/)).toBeInTheDocument();
  expect(screen.getByText(/Ready CPU/)).toBeInTheDocument();

  const rockButton = screen.getByRole("button", { name: /rock/i });
  userEvent.click(rockButton);

  // Rock button clicked. Assert that initial state is false.
  expect(screen.queryByText(/Ready Player 1/)).toBeNull();
  expect(screen.queryByText(/Ready CPU/)).toBeNull();

  const resetButton = screen.getByRole("button", { name: /reset/i });
  userEvent.click(resetButton);

  // Rest button clicked. Assert that initial state is true.
  expect(screen.getByText(/Ready Player 1/)).toBeInTheDocument();
  expect(screen.getByText(/Ready CPU/)).toBeInTheDocument();
});
