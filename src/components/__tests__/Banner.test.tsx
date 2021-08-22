import { render, screen } from "@testing-library/react";
import Banner from "../Banner";

it("Render Banner", () => {
  render(<Banner />)
  expect(screen.getByText(/Good Cat/i)).toBeInTheDocument();
})
