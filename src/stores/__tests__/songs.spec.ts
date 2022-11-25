import { createPinia, setActivePinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { useSongsStore } from "../songs";

describe("songs", () => {
  let store;
  beforeEach(() => {
    setActivePinia(createPinia());
    store = useSongsStore();
  });

  it("create sample song", () => {
    expect(store.songs).toHaveLength(1);
    expect(store.songs.map((s) => s.title)).toContain("Testowa piosenka");
  });
});
