import { defineStore } from "pinia";

export interface ColorMappingState {
  mapping: Map<string, string>;
}

export const useColorMappingStore = defineStore({
  id: "colorMapping",
  state: (): ColorMappingState => ({
    mapping: new Map<string, string>([
      ["c", "#dd1a1a"],
      ["d", "#82dd1a"],
      ["e", "#ae1cbe"],
      ["f", "#e28710"],
      ["g", "#2528ee"],
      ["a", "#eae612"],
      ["b", "#f37ab8"],
    ]),
  }),
  getters: {
    getColor: (state: ColorMappingState) => (note: string) =>
      state.mapping.get(note),
  },
});
