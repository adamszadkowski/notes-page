<template>
  <main>
    <h1>{{ song.title }}</h1>
    <notes-page class="notes-page" :song="song" :notes-in-row="8"></notes-page>
  </main>
</template>

<script lang="ts">
import NotesPage from "@/components/NotesPage.vue";
import { useSongsStore } from "@/stores/songs";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useSongsStore();
    return { store };
  },
  components: {
    NotesPage,
  },
  computed: {
    song() {
      return this.store.songs[0];
    },
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
