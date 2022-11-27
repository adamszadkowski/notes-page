<template>
  <div>
    <base-note :color="color" :is-partial="isPartial">
      <template #content>
        <div :class="colorClass">
          <div class="notes-page__desc--fill" :style="colorStyle"></div>
        </div>
      </template>
      <template #syllable>{{ syllable }}</template>
    </base-note>
  </div>
</template>

<script lang="ts">
import BaseNote from "@/components/BaseNote.vue";
import { useColorMappingStore } from "@/stores/color-mapping";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    BaseNote,
  },
  setup() {
    const store = useColorMappingStore();
    return { store };
  },
  props: {
    syllable: { type: String, required: true },
    note: { type: String, required: true },
    isPartial: { type: Boolean, required: true },
  },
  computed: {
    colorClass() {
      return [
        ...(this.note.endsWith("+")
          ? ["notes-page__desc", "notes-page__desc--high"]
          : []),
        ...(this.note.endsWith("-")
          ? ["notes-page__desc", "notes-page__desc--low"]
          : []),
      ];
    },
    color() {
      return this.store.getColor(this.note.charAt(0)) ?? "gray";
    },
    colorStyle() {
      return {
        "background-color": this.color,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.notes-page {
  &__desc {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 50%;
    padding: 0 13% 13% 0;
    background: rgba(255, 255, 255, 0.926);
    width: 40%;
    height: 40%;

    &--fill {
      width: 100%;
      height: 100%;
      transform: scale(105%);
    }

    &--low {
      transform: translateX(-50%) translateY(60%) rotate(45deg);
    }

    &--high {
      transform: translateX(-50%) translateY(80%) rotate(225deg);
    }
  }
}
</style>
