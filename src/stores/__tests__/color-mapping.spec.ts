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
    expect(store.getColor("c")).toBe("#dd1a1a");
    expect(store.getColor("d")).toBe("#82dd1a");
    expect(store.getColor("e")).toBe("#ae1cbe");
    expect(store.getColor("f")).toBe("#e28710");
    expect(store.getColor("g")).toBe("#2528ee");
    expect(store.getColor("a")).toBe("#eae612");
    expect(store.getColor("b")).toBe("#f37ab8");
  });
});
