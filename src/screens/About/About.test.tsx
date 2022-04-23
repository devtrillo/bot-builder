import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import About from "./About";

describe("The about page", () => {
  it("the title is visible", async () => {
    render(<About />);
    expect(screen.getByText("About screen")).toBeInTheDocument();
    expect(await screen.findByText("first post title")).toBeInTheDocument();
  });
});
