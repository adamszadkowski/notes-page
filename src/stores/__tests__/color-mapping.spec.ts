import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useColorMappingStore } from "../color-mapping";

describe("color-mapping", () => {
  let store;
  beforeEach(() => {
    setActivePinia(createPinia());
    store = useColorMappingStore();
  });

  it("get default mappings", () => {
    expect(store.getColor("c")).toBe("#f79fb8");
    expect(store.getColor("d")).toBe("#ff6908");
    expect(store.getColor("e")).toBe("#ffcb08");
    expect(store.getColor("f")).toBe("#96ff08");
    expect(store.getColor("g")).toBe("#51a0ff");
    expect(store.getColor("a")).toBe("#9d3701");
    expect(store.getColor("b")).toBe("#fc092c");
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
      expect(store.getColor1(note)).toEqual([
        store.getColor(below),
        store.getColor(above),
      ]);
    });
  });
});
