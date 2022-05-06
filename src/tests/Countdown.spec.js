import { render, screen } from "@testing-library/react";
import { Countdown, displayTimeVals } from "../components/Countdown";

describe("Countdown component", () => {
  it("Renders the Countdown component", () => {
    render(<Countdown />);
    const countdownComponent = screen.getByText("Time");
    expect(countdownComponent).toBeTruthy();
  });

  it("Has a value of 0 seconds configured by default", () => {
    render(<Countdown />);
    const timeVal = screen.getByText("00: 00");
    expect(timeVal).toHaveTextContent("00: 00");
  });

  it("Allows the user to configure a certain time value", () => {
    render(<Countdown time={2000} />);
    const timeVal = screen.getByText("00: 02");
    expect(timeVal).toHaveTextContent("00: 02");
  });

  it("Displays time values in minutes and seconds and receives miliseconds as props", () => {
    const timeVal = displayTimeVals(2000);
    expect(timeVal).toBe("00: 02");
  });

  it("Displays time value 0 if no miliseconds argument is passed in", () => {
    const timeVal = displayTimeVals();
    expect(timeVal).toBe("00: 00");
  });
});
