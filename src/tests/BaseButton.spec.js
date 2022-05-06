import { render, screen, fireEvent } from "@testing-library/react";
import { BaseButton } from "../components/BaseButton";

describe("BaseButton component", () => {
  it("Displays round BaseButton component", () => {
    render(<BaseButton btnText="start" />);
    const buttonComponent = screen.getByText("start");
    expect(buttonComponent).toBeTruthy();
    expect(buttonComponent).toHaveClass("rounded-btn");
  });

  it("BaseButton has configurable text and fireable event", () => {
    const mockHandler = jest.fn();
    render(<BaseButton btnText="testText" handler={mockHandler} />);
    const buttonComponent = screen.getByText("testText");
    expect(buttonComponent).toHaveTextContent("testText");
    fireEvent.click(buttonComponent, {});
    expect(mockHandler).toHaveBeenCalled();
  });
});
