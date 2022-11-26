<template>
  <main>
    <nav>
      <ul>
        <li v-for="song in songs" :key="song.id">
          <button @click="selectSong(song.id)">{{ song.title }}</button>
        </li>
      </ul>
    </nav>
    <section class="song">
      <song-title></song-title>
      <notes-page class="notes-page" :song="currentSong"></notes-page>
    </section>
  </main>
</template>

<script lang="ts">
import NotesPage from "@/components/NotesPage.vue";
import SongTitle from "@/components/SongTitle.vue";
import { useSongsStore } from "@/stores/songs";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useSongsStore();
    return { store };
  },
  components: {
    NotesPage,
    SongTitle,
  },
  computed: {
    songs() {
      return this.store.songs;
    },
    currentSong() {
      return this.store.currentSong;
    },
  },
  methods: {
    selectSong(id: string) {
      this.store.selectSongById(id);
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
