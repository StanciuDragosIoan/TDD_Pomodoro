import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { act } from "react-dom/test-utils";

describe("Container App component", () => {
  it("renders pomodoro app", () => {
    render(<App />);
    const textElement = screen.getByText(/pomodoro app/i);
    expect(textElement).toBeInTheDocument();
  });

  it("Renders The Countdown component", () => {
    render(<App />);
    const countDown = screen.getByText("Time");
    expect(countDown).toBeInTheDocument();
  });

  it("renders the start button", () => {
    render(<App />);
    const startBtn = screen.getByRole("button", {
      name: "start",
    });
    expect(startBtn).toBeInTheDocument();
  });

  it("Renders the CustomTime component", () => {
    render(<App />);
    const customTime = screen.getByText("Set Minutes");
    expect(customTime).toBeTruthy();
  });

  it("Allows the user to start and stop the timer", async () => {
    render(<App />);
    const startBtn = screen.getByText("start");
    screen.getByText("00: 02");
    fireEvent.click(startBtn);
    const stopBtn = screen.getByText("stop");
    await act(async () => {
      await new Promise((r) => setTimeout(r, 1000));
    });
    fireEvent.click(stopBtn);
    screen.getByText("00: 01");
  });

  it("When time reaches 0 it sets the timer to 10 minutes", async () => {
    render(<App />);
    const startBtn = screen.getByText("start");
    screen.getByText("00: 02");
    fireEvent.click(startBtn);
    const checkStartBtn = () => screen.getByText("stop");
    await act(async () => {
      await new Promise((r) => setTimeout(r, 3000));
    });
    screen.getByText("10: 00");
    screen.getByRole("button", { name: "start" });
    expect(checkStartBtn).toThrow(); //this is gone now that timer stopped automatically
  });

  it("Does not render  the ProgressBar component if the time is not started", () => {
    render(<App />);
    const progressBar = () => screen.getByRole("progressbar");
    expect(progressBar).toThrow();
  });

  it("Renders the progress bar if the time is started", () => {
    render(<App />);
    const startBtn = screen.getByText("start");
    fireEvent.click(startBtn);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeTruthy();
  });
  it("Shows the current time left when timer is stopped", async () => {
    render(<App />);
    const customTimeComponent = screen.getByPlaceholderText("Enter minutes");
    fireEvent.change(customTimeComponent, { target: { value: "3" } });
    const btnComponent = screen.getByText("Set Minutes");
    fireEvent.click(btnComponent, {});
    const startBtn = screen.getByText("start");
    fireEvent.click(startBtn);
    await act(async () => {
      await new Promise((r) => setTimeout(r, 1000));
    });
    const stopBtn = screen.getByText("stop");
    fireEvent.click(stopBtn);
    screen.getByText("02: 59");
  });
});
