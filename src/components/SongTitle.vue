<template>
  <h1 class="song-title">
    <a @click="toggleDropdown()" class="song-title__link"
      >{{ currentSongTitle }}&nbsp;</a
    >
    <div class="song-title__dropdown" :style="dropdownStyle">
      <ul>
        <li v-for="song in songs" :key="song.id">{{ song.title }}</li>
      </ul>
    </div>
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
  methods: {
    toggleDropdown() {
      this.isVisibile = !this.isVisibile;
    },
  },
  data() {
    return {
      isVisibile: false,
    };
  },
  computed: {
    currentSongTitle() {
      return this.store.currentSong.title;
    },
    songs() {
      return this.store.songs;
    },
    dropdownStyle() {
      return { display: this.isVisibile ? "block" : "none" };
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

  &__dropdown {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    background-color: white;
    z-index: 1;
    box-shadow: 10px 10px 25px rgba($color: $base-color, $alpha: 0.4);
  }
}
</style>
