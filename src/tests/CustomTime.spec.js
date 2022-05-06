import { render, screen, fireEvent } from "@testing-library/react";
import { CustomTime } from "../components/CustomTime";
import App from "../App";

describe("CustomTime component", () => {
  it("Renders the CustomTime component", () => {
    render(<CustomTime />);
    const customTimeComponent = screen.getByText("Choose your own interval");
    expect(customTimeComponent).toBeTruthy();
  });

  it("Allows the user to set a certain time in minutes by tyiping in the placeholder and clicking the button", () => {
    render(<App />);
    const timeVal = screen.getByText("00: 02");
    expect(timeVal).toHaveTextContent("00: 02");
    const customTimeComponent = screen.getByPlaceholderText("Enter minutes");
    fireEvent.change(customTimeComponent, { target: { value: "3" } });
    const btnComponent = screen.getByText("Set Minutes");
    fireEvent.click(btnComponent, {});
    const timeVal2 = screen.getByText("03: 00");
    expect(timeVal2).toHaveTextContent("03: 00");
  });
});
