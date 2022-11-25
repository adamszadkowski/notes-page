import type { Song } from "@/models/song";
import { defineStore } from "pinia";

export interface SongsState {
  songs: Array<Song>;
}

export const useSongsStore = defineStore({
  id: "songs",
  state: (): SongsState => ({
    songs: [
      {
        title: "Testowa piosenka",
        notes: [
          { note: "c", syllable: "Tu-" },
          { note: "d", syllable: "taj" },
          { note: "b", syllable: "sy-" },
          { note: "e", syllable: "la-" },
          { note: "f", syllable: "by" },
          { note: "g", syllable: "bę-" },
          { note: "a", syllable: "dą" },
          { note: "c", syllable: "hej!" },
          { note: "c", syllable: "sia-" },
          { note: "d", syllable: "la-" },
          { note: "c", syllable: "la" },
        ],
      },
    ],
  }),
});
