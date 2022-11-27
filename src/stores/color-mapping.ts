import { defineStore } from "pinia";

export interface ColorMappingState {
  mapping: Map<string, string>;
}

export const useColorMappingStore = defineStore({
  id: "colorMapping",
  state: (): ColorMappingState => ({
    mapping: new Map<string, string>([
      ["c", "#f79fb8"],
      ["d", "#ff6908"],
      ["e", "#ffcb08"],
      ["f", "#96ff08"],
      ["g", "#51a0ff"],
      ["a", "#9d3701"],
      ["b", "#fc092c"],
    ]),
  }),
  getters: {
    getColor() {
      return (note: string) => this.getColor1(note)[0];
    },
    getColor1(state: ColorMappingState) {
      return (note: string): string[] => {
        if (note.endsWith("#")) {
          return [
            this.getColor1(note.charAt(0))[0],
            this.getColor1(getNext(note.charAt(0)))[0],
          ];
        }
        if (note.length === 2 && note.endsWith("b")) {
          return [
            this.getColor1(getPrevious(note.charAt(0)))[0],
            this.getColor1(note.charAt(0))[0],
          ];
        }
        return [state.mapping.get(note)];
      };
    },
  },
});

function getNext(note: string): string {
  if (note === "g") return "a";
  return String.fromCharCode(note.charCodeAt(0) + 1);
}

function getPrevious(note: string): string {
  if (note === "a") return "g";
  return String.fromCharCode(note.charCodeAt(0) - 1);
}
