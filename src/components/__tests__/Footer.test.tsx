import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

it("Render Footer", () => {
  render(<Footer />)
  expect(screen.getByText(/View on GitHub/i)).toBeInTheDocument()
})
