import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useCounterStore } from "../counter";

describe("counter suite", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("increments", () => {
    const counter = useCounterStore();
    expect(counter.counter).toBe(0);
    counter.increment();
    expect(counter.counter).toBe(1);
  });
});
