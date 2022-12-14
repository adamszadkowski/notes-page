import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useSongsStore } from "../songs";

describe("songs", () => {
  let store;
  beforeEach(() => {
    setActivePinia(createPinia());
    store = useSongsStore();
  });

  it("create sample song", () => {
    expect(store.songs).toHaveLength(5);
    expect(store.songs.map((s) => s.title)).toEqual(
      expect.arrayContaining([
        "Testowa piosenka",
        "Panie Janie",
        "Wlazł kotek",
        "Przybieżeli do Betlejem",
        "Jedzie pociąg",
      ])
    );
  });

  it("selects Panie Janie by default", () => {
    expect(store.currentSong.title).toBe("Panie Janie");
  });

  it("select song by id", () => {
    const testSongId = store.songs[0].id;

    store.selectSongById(testSongId);

    expect(store.currentSong.title).toBe("Testowa piosenka");
  });

  it("throw on missing id", () => {
    expect(() => store.selectSongById("missing-id")).toThrowError(
      /^No such id as missing-id$/
    );
  });
});
