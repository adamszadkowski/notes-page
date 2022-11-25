<template>
  <div class="notes-page__note">
    <div class="notes-page__icon" :style="colorStyle"></div>
    <div :class="syllableClass">{{ syllable }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useColorMappingStore } from "@/stores/color-mapping";

export default defineComponent({
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
    colorStyle() {
      return {
        "background-color": this.store.getColor(this.note) ?? "gray",
      };
    },
    syllableClass() {
      return [
        "notes-page__syllable",
        ...(this.isPartial ? ["notes-page__syllable--partial"] : []),
      ];
    },
  },
});
</script>

<style lang="scss" scoped>
.notes-page {
  &__note {
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5%;
  }

  &__icon {
    border-radius: 50%;
    width: 85%;

    &::before {
      content: "";
      display: block;
      padding-top: 100%;
    }
  }

  &__syllable {
    margin-top: 15px;
    font-size: 1.5em;
    text-align: center;
    width: 100%;

    @media (max-width: 620px) {
      & {
        font-size: 1em;
      }
    }

    &--partial {
      position: relative;

      &::after {
        content: "-";
        position: absolute;
        width: 10px;
        right: -5px;
      }
    }
  }
}
</style>
