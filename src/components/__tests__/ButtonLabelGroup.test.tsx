import { render, screen } from "@testing-library/react";
import ButtonLabelGroup from "../ButtonLabelGroup";

it("Render ButtonLabelGroup", () => {
  render(<ButtonLabelGroup>ButtonLabelGroup</ButtonLabelGroup>)
  expect(screen.getByText(/ButtonLabelGroup/i)).toBeInTheDocument();
})
