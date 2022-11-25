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
    getColor: (state: ColorMappingState) => (note: string) =>
      state.mapping.get(note),
  },
});
