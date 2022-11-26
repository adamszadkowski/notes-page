<template>
  <main>
    <nav>
      <ul>
        <li v-for="song in songs" :key="song.id">{{ song.title }}</li>
      </ul>
    </nav>
    <section class="song">
      <h1>{{ currentSong.title }}</h1>
      <notes-page class="notes-page" :song="currentSong"></notes-page>
    </section>
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
    songs() {
      return this.store.songs;
    },
    currentSong() {
      return this.store.currentSong;
    },
  },
});
</script>

<style lang="scss" scoped>
section.song {
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid rgb(201, 201, 201);
  max-width: 800px;
}
</style>
