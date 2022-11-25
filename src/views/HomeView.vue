<template>
  <main>
    <notes-page :song="song"></notes-page>
  </main>
</template>

<script lang="ts">
import NotesPage from "@/components/NotesPage.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    NotesPage,
  },
  data() {
    return {
      song: {
        notes: [
          { note: "c", syllable: "Tu-" },
          { note: "d", syllable: "taj" },
          { note: "b", syllable: "sy-" },
          { note: "e", syllable: "la-" },
          { note: "f", syllable: "by" },
          { note: "g", syllable: "bę-" },
          { note: "a", syllable: "dą" },
          { note: "c", syllable: "hej!" },
        ],
      },
    };
  },
});
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  align-items: stretch;
  height: 100vh;
}
</style>
