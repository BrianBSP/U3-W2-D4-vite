import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import App from "../App";

describe("Welcome is in the page", () => {
  it("mounts the component correctly", () => {
    render(<App />);

    screen.debug();
  });
});
