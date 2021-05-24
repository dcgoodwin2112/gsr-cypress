import { render, screen } from "@testing-library/react";
import Layout from "../Layout";

it("Renders Layout", () => {
  render(<Layout>Page Content</Layout>);
  // Site banner
  expect(screen.getByRole(/banner/i)).not.toBeUndefined();
  // Main landmark tag
  expect(screen.getByRole(/main/i)).not.toBeUndefined();
  // Site footer
  expect(screen.getByRole(/contentinfo/i)).not.toBeUndefined();

  expect(screen.getByText(/Page Content/i)).toBeInTheDocument();
});
