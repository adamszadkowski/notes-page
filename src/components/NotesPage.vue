<template>
  <section class="notes-page" :style="sectionStyle">
    <template v-for="(note, index) in notes">
      <single-note
        v-if="note != null"
        :key="index"
        :note="note.note"
        :syllable="note.syllable"
        :is-partial="note.isPartial"
      />
      <div v-else :key="`${index}else`"></div>
    </template>
  </section>
</template>

<script lang="ts">
import SingleNote from "@/components/SingleNote.vue";
import type { Note, Song } from "@/models/song";
import { defineComponent } from "vue";
import type { PropType } from "vue/types/umd";

export default defineComponent({
  components: {
    SingleNote,
  },
  props: {
    song: { type: Object as PropType<Song>, required: true },
  },
  computed: {
    notes() {
      return this.song.notes.map((n: Note) => {
        if (n == null) return null;
        return {
          note: n.note,
          syllable: n.syllable.replace(/-$/, ""),
          isPartial: n.syllable.endsWith("-"),
        };
      });
    },
    sectionStyle() {
      return {
        "grid-template-columns": `repeat(${this.song.notesInRow}, 1fr)`,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.notes-page {
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-content: start;
  row-gap: 15px;
  padding: 30px;
}
</style>
