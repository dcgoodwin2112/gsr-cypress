import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ResetButton from "../ResetButton";

it("Render ResetButton", () => {
  const handleCLick = jest.fn();
  render(<ResetButton clickHandler={handleCLick}>Reset Session</ResetButton>);
  expect(screen.getByText(/Reset Session/i)).toBeInTheDocument();

  // Test click event function call
  userEvent.click(screen.getByRole(/button/i));
  expect(handleCLick).toHaveBeenCalledTimes(1);
});
