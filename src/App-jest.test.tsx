import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Counter-Application", () => {
  test("when the increment button is clicked", () => {
    render(<App />);

    const incrementButton = screen.getByTestId("incremented-value");
    fireEvent.click(incrementButton);

    const value = screen.getByTestId("counter-value");

    expect(value.textContent).toBe("1");
  });
});
