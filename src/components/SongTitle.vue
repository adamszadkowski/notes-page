<template>
  <h1 class="song-title">
    <a class="song-title__link">{{ currentSongTitle }}&nbsp;</a>
  </h1>
</template>

<script lang="ts">
import { useSongsStore } from "@/stores/songs";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useSongsStore();

    return { store };
  },
  computed: {
    currentSongTitle() {
      return this.store.currentSong.title;
    },
  },
});
</script>

<style lang="scss" scoped>
$base-color: #3c430b;
$hovered-color: #586311;
.song-title {
  position: relative;

  &__link {
    color: $base-color;
    cursor: default;
    text-decoration: none;

    &:hover {
      color: $hovered-color;

      &::after {
        border-color: $hovered-color;
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: 0.2em;
      width: 0.4em;
      height: 0.4em;
      border: solid $base-color;
      border-width: 0 0.12em 0.12em 0;
      transform: rotate(45deg);
    }
  }
}
</style>
