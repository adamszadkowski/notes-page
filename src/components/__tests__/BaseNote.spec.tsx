import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BaseNote } from "../BaseNote";

describe("BaseNote", () => {
  it("renders the syllable", () => {
    render(<BaseNote note="c" syllable="do" isPartial={false} />);
    expect(screen.getByText("do")).toBeInTheDocument();
  });

  it("applies solid background for a base note", () => {
    const { container } = render(
      <BaseNote note="c" syllable="do" isPartial={false} />,
    );
    const icon = container.querySelector("[style]") as HTMLElement;
    expect(icon.style.backgroundColor).toBeTruthy();
    expect(icon.style.background).not.toContain("linear-gradient");
  });

  it("applies gradient background for a sharp note", () => {
    const { container } = render(
      <BaseNote note="c#" syllable="do" isPartial={false} />,
    );
    const icon = container.querySelector("[style]") as HTMLElement;
    expect(icon.style.background).toContain("linear-gradient");
  });

  it("applies gradient background for a flat note", () => {
    const { container } = render(
      <BaseNote note="eb" syllable="mi" isPartial={false} />,
    );
    const icon = container.querySelector("[style]") as HTMLElement;
    expect(icon.style.background).toContain("linear-gradient");
  });

  it("renders arrow when provided", () => {
    render(
      <BaseNote
        note="c"
        syllable="do"
        isPartial={false}
        arrow={<span data-testid="arrow" />}
      />,
    );
    expect(screen.getByTestId("arrow")).toBeInTheDocument();
  });
});
