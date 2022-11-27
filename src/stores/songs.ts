import type { Song } from "@/models/song";
import { defineStore } from "pinia";

export interface SongsState {
  songs: Array<Song>;
  currentSongId: string;
}

export const useSongsStore = defineStore({
  id: "songs",
  state: (): SongsState => {
    return {
      songs: [
        {
          id: "testowa-piosenka",
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
          id: "panie-janie",
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
        {
          id: "wlazl-kotek",
          title: "Wlazł kotek",
          notesInRow: 6,
          notes: [
            { note: "g", syllable: "Wlazł" },
            { note: "e", syllable: "ko-" },
            { note: "e", syllable: "tek" },
            { note: "f", syllable: "na" },
            { note: "d", syllable: "pło-" },
            { note: "d", syllable: "tek" },
            { note: "c", syllable: "i" },
            { note: "e", syllable: "mru-" },
            { note: "g", syllable: "ga" },
            { note: "c", syllable: "i" },
            { note: "e", syllable: "mru-" },
            { note: "g", syllable: "ga" },
            { note: "g", syllable: "ła-" },
            { note: "e", syllable: "dna" },
            { note: "e", syllable: "ta" },
            { note: "f", syllable: "pio-" },
            { note: "d", syllable: "sen-" },
            { note: "d", syllable: "ka" },
            { note: "c", syllable: "nie-" },
            { note: "e", syllable: "dłu-" },
            { note: "c", syllable: "ga" },
            { note: "c", syllable: "nie-" },
            { note: "e", syllable: "dłu-" },
            { note: "c", syllable: "ga" },
          ],
        },
        {
          id: "przybiezeli-do-betlejem",
          title: "Przybieżeli do Betlejem",
          notesInRow: 8,
          notes: [
            { note: "c", syllable: "Przy-" },
            { note: "b", syllable: "bie-" },
            { note: "c", syllable: "że-" },
            { note: "d", syllable: "li" },
            { note: "e", syllable: "do" },
            { note: "d", syllable: "Be-" },
            { note: "e", syllable: "tle-" },
            { note: "f", syllable: "jem" },
            { note: "g", syllable: "pa-" },
            { note: "a", syllable: "ste-" },
            { note: "g", syllable: "rze" },
            null,
            null,
            null,
            null,
            null,
            { note: "c", syllable: "Gra-" },
            { note: "b", syllable: "jąc" },
            { note: "c", syllable: "sko-" },
            { note: "d", syllable: "cznie" },
            { note: "e", syllable: "Dzie-" },
            { note: "d", syllable: "cią-" },
            { note: "e", syllable: "te-" },
            { note: "f", syllable: "czku" },
            { note: "g", syllable: "na" },
            { note: "a", syllable: "li-" },
            { note: "g", syllable: "rze" },
            null,
            null,
            null,
            null,
            null,
            { note: "c", syllable: "Chwa-" },
            { note: "g", syllable: "ła" },
            { note: "g", syllable: "na" },
            { note: "a", syllable: "wy-" },
            { note: "g", syllable: "so-" },
            { note: "f", syllable: "ko-" },
            { note: "e", syllable: "ści" },
            null,
            { note: "f", syllable: "chwa-" },
            { note: "f", syllable: "ła" },
            { note: "a", syllable: "na" },
            { note: "g", syllable: "wy-" },
            { note: "f", syllable: "so-" },
            { note: "e", syllable: "ko-" },
            { note: "d", syllable: "ści" },
            null,
            { note: "e", syllable: "A" },
            { note: "f", syllable: "po-" },
            { note: "g", syllable: "kój" },
            null,
            { note: "e", syllable: "na" },
            { note: "d", syllable: "zie-" },
            { note: "c", syllable: "mi" },
          ],
        },
      ],
      currentSongId: "panie-janie",
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
