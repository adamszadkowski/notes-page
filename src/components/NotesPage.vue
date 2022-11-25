<template>
  <section class="notes-page">
    <single-note
      v-for="(note, index) in notes"
      :key="index"
      :note="note.note"
      :syllable="note.syllable"
      :is-partial="note.isPartial"
    />
  </section>
</template>

<script lang="ts">
import SingleNote from "@/components/SingleNote.vue";
import { defineComponent } from "vue";
import { Song, Note } from "@/models/song";

export default defineComponent({
  components: {
    SingleNote,
  },
  props: {
    song: { type: Song, required: true },
  },
  computed: {
    notes() {
      return this.song.notes.map((n: Note) => ({
        note: n.note,
        syllable: n.syllable.replace(/-$/, ""),
        isPartial: n.syllable.endsWith("-"),
      }));
    },
  },
});
</script>

<style lang="scss" scoped>
.notes-page {
  width: 800px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-content: start;
  row-gap: 15px;
  border: 1px solid rgb(201, 201, 201);
  padding: 30px;
}
</style>
