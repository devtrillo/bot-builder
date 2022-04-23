import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { userEvent } from "@/utils/test-utils";

import { Alert } from "./Alert";

describe("Simple working test", () => {
  const text = "This is an alert";
  it("the title is visible", () => {
    render(<Alert>{text}</Alert>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    const onDismiss = vi.fn();
    render(<Alert onDismiss={onDismiss}>{text}</Alert>);
    userEvent.click(screen.getByRole("button"));
    expect(onDismiss).toHaveBeenCalledOnce();
  });
});
