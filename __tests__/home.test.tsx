import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import Home from "../src/app/page";

describe("Home page", () => {
  it("renders the home text and default counter value", () => {
    render(<Home />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Counter" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Count = 10")).toBeInTheDocument();
  });

  it("increments the counter when the increase button is clicked", () => {
    render(<Home />);

    fireEvent.click(
      screen.getByRole("button", { name: /increase counter by 1/i }),
    );

    expect(screen.getByText("Count = 11")).toBeInTheDocument();
  });
});
