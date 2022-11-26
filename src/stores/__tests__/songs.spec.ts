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
    expect(store.songs).toHaveLength(2);
    expect(store.songs.map((s) => s.title)).to.contains(
      "Testowa piosenka",
      "Panie Janie"
    );
  });

  it("selects Panie Janie by default", () => {
    expect(store.currentSong.title).toBe("Panie Janie");
  });
});
