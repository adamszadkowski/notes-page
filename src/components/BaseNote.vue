<template>
  <div class="notes-page__note">
    <div class="notes-page__icon" :style="colorStyle">
      <slot name="content"></slot>
    </div>
    <div :class="syllableClass">
      <slot name="syllable"></slot>
    </div>
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
    note: { type: String, required: true },
    isPartial: { type: Boolean, required: true },
  },
  computed: {
    syllableClass() {
      return [
        "notes-page__syllable",
        ...(this.isPartial ? ["notes-page__syllable--partial"] : []),
      ];
    },
    colorStyle() {
      const colors = this.store.getColor1(this.note);
      if (colors.length === 1) {
        return { "background-color": colors[0] };
      } else {
        return {
          background: `linear-gradient( to right, ${colors[0]} 0%, ${colors[0]} 50%, ${colors[1]} 50%, ${colors[1]} 100% )`,
        };
      }
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

    @media print {
      print-color-adjust: exact !important;
    }

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
