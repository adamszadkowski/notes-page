<template>
  <main>
    <h1>{{ song.title }}</h1>
    <notes-page class="notes-page" :song="song" :notes-in-row="8"></notes-page>
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
    };
  },
});
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
