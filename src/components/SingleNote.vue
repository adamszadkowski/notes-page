<template>
  <div class="notes-page__note">
    <div class="notes-page__icon" :style="colorStyle">
      <div :class="colorClass">
        <div class="notes-page__desc--fill" :style="colorStyle"></div>
      </div>
    </div>
    <div :class="syllableClass">{{ syllable }}</div>
  </div>
</template>

<script lang="ts">
import { useColorMappingStore } from "@/stores/color-mapping";
import { defineComponent } from "vue";

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
    colorStyle() {
      return {
        "background-color": this.store.getColor(this.note.charAt(0)) ?? "gray",
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
    position: relative;

    &::before {
      content: "";
      display: block;
      padding-top: 100%;
    }
  }

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
