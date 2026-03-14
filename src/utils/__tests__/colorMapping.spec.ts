import { describe, expect, it } from "vitest";
import { getNoteColors } from "../colorMapping";

describe("colorMapping", () => {
  it("get default mappings", () => {
    expect(getNoteColors("c")[0]).toBe("#f79fb8");
    expect(getNoteColors("d")[0]).toBe("#ff6908");
    expect(getNoteColors("e")[0]).toBe("#ffcb08");
    expect(getNoteColors("f")[0]).toBe("#96ff08");
    expect(getNoteColors("g")[0]).toBe("#51a0ff");
    expect(getNoteColors("a")[0]).toBe("#9d3701");
    expect(getNoteColors("b")[0]).toBe("#fc092c");
  });

  [
    { note: "c#", below: "c", above: "d" },
    { note: "db", below: "c", above: "d" },
    { note: "d#", below: "d", above: "e" },
    { note: "eb", below: "d", above: "e" },
    { note: "f#", below: "f", above: "g" },
    { note: "gb", below: "f", above: "g" },
    { note: "g#", below: "g", above: "a" },
    { note: "ab", below: "g", above: "a" },
    { note: "a#", below: "a", above: "b" },
    { note: "bb", below: "a", above: "b" },
  ].forEach(({ note, below, above }) => {
    it(`map note ${note} between ${below} and ${above}`, () => {
      expect(getNoteColors(note)).toEqual([
        getNoteColors(below)[0],
        getNoteColors(above)[0],
      ]);
    });
  });
});
