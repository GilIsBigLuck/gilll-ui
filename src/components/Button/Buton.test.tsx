import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with label", () => {
    render(<Button label="Click me" />);
    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom background color", () => {
    render(<Button label="Color" backgroundColor="#ff0000" />);
    expect(screen.getByText("Color")).toHaveStyle("background-color: #ff0000");
  });
});
