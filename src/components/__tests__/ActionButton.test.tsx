import {screen, render} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ActionButton from "../ActionButton"

it("Renders ActionButton", () => {
  const handleClick = jest.fn()
  render(<ActionButton clickHandler={handleClick} name="action">ActionButton</ActionButton>)
  expect(screen.getByText(/ActionButton/i)).toBeInTheDocument()

  // Test click event function call
  userEvent.click(screen.getByRole(/button/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
})
