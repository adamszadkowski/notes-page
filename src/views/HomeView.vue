<template>
  <main>
    <nav>
      <ul>
        <li v-for="song in songs" :key="song.id">{{ song.title }}</li>
      </ul>
    </nav>
    <section>
      <h1>{{ song.title }}</h1>
      <notes-page class="notes-page" :song="song"></notes-page>
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
    song() {
      return this.songs[1];
    },
  },
});
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;

  .notes-page {
    max-width: 800px;
  }
}
</style>
