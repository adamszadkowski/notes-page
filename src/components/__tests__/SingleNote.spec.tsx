import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SingleNote } from "../SingleNote";

describe("SingleNote", () => {
  it("renders no SVG for a plain note", () => {
    const { container } = render(
      <SingleNote note="c" syllable="do" isPartial={false} />,
    );
    expect(container.querySelector("svg")).toBeNull();
  });

  it("renders an SVG arrow for a note with + suffix", () => {
    const { container } = render(
      <SingleNote note="c+" syllable="do" isPartial={false} />,
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders an SVG arrow for a note with - suffix", () => {
    const { container } = render(
      <SingleNote note="c-" syllable="do" isPartial={false} />,
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
