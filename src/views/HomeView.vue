<template>
  <main>
    <section class="song">
      <song-title></song-title>
      <notes-page
        v-if="currentSong != null"
        class="notes-page"
        :song="currentSong"
      ></notes-page>
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
    currentSong() {
      return this.store.currentSong;
    },
  },
});
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;

  section.song {
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid rgb(201, 201, 201);
    max-width: 800px;
    width: 100%;
    background: rgb(251, 253, 253);
  }
}
</style>
