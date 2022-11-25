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

export default defineComponent({
  components: {
    SingleNote,
  },
  data() {
    return {
      notes: [
        { note: "c", syllable: "Tu", isPartial: true },
        { note: "d", syllable: "taj", isPartial: false },
        { note: "b", syllable: "sy", isPartial: true },
        { note: "e", syllable: "la", isPartial: true },
        { note: "f", syllable: "by", isPartial: false },
        { note: "g", syllable: "bę", isPartial: true },
        { note: "a", syllable: "dą", isPartial: false },
        { note: "c", syllable: "hej!", isPartial: false },
      ],
    };
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
