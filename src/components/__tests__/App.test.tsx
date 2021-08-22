import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

it("Render App and test button functionality", () => {
  render(<App />);
  // App loaded. Assert that initial state is true.
  expect(screen.getByText(/Ready Kitty 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Ready Cat-puter/i)).toBeInTheDocument();

  const goodButton = screen.getByRole("button", { name: /good/i });
  userEvent.click(goodButton);

  // Rock button clicked. Assert that initial state is false.
  expect(screen.queryByText(/Ready Kitty 1/i)).toBeNull();
  expect(screen.queryByText(/Ready Cat-puter/i)).toBeNull();

  const resetButton = screen.getByRole("button", { name: /reset/i });
  userEvent.click(resetButton);

  // Rest button clicked. Assert that initial state is true.
  expect(screen.getByText(/Ready Kitty 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Ready Cat-puter/i)).toBeInTheDocument();
});
