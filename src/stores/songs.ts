import type { Song } from "@/models/song";
import { defineStore } from "pinia";

export interface SongsState {
  songs: Array<Song>;
  currentSongId: string;
}

export const useSongsStore = defineStore({
  id: "songs",
  state: (): SongsState => {
    const panieJanieSongId = Math.random().toString(16).slice(2);
    return {
      songs: [
        {
          id: Math.random().toString(16).slice(2),
          title: "Testowa piosenka",
          notesInRow: 7,
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
        {
          id: panieJanieSongId,
          title: "Panie Janie",
          notesInRow: 8,
          notes: [
            { note: "c", syllable: "Pa-" },
            { note: "d", syllable: "nie" },
            { note: "e", syllable: "Ja-" },
            { note: "c", syllable: "nie" },
            { note: "c", syllable: "Pa-" },
            { note: "d", syllable: "nie" },
            { note: "e", syllable: "Ja-" },
            { note: "c", syllable: "nie" },
            { note: "e", syllable: "ra-" },
            { note: "f", syllable: "no" },
            { note: "g", syllable: "wstań" },
            null,
            { note: "e", syllable: "ra-" },
            { note: "f", syllable: "no" },
            { note: "g", syllable: "wstań" },
            null,
            { note: "g", syllable: "wszy-" },
            { note: "a", syllable: "stkie" },
            { note: "g", syllable: "dzwo-" },
            { note: "f", syllable: "ny" },
            { note: "e", syllable: "bi-" },
            { note: "c", syllable: "ją" },
            null,
            null,
            { note: "g", syllable: "wszy-" },
            { note: "a", syllable: "stkie" },
            { note: "g", syllable: "dzwo-" },
            { note: "f", syllable: "ny" },
            { note: "e", syllable: "bi-" },
            { note: "c", syllable: "ją" },
            null,
            null,
            { note: "c", syllable: "bim" },
            { note: "d", syllable: "bam" },
            { note: "c", syllable: "bom" },
            null,
            { note: "c", syllable: "bim" },
            { note: "d", syllable: "bam" },
            { note: "c", syllable: "bom" },
          ],
        },
      ],
      currentSongId: panieJanieSongId,
    };
  },
  getters: {
    currentSong: (state): Song =>
      state.songs.find((s: Song) => s.id === state.currentSongId),
  },
  actions: {
    selectSongById(id: string) {
      if (!this.songs.find((s: Song) => s.id === id))
        throw Error("No such id as missing-id");
      this.currentSongId = id;
    },
  },
});
