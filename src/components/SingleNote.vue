<template>
  <div class="notes-page__note">
    <div :class="colorClass"></div>
    <div :class="syllableClass">{{ syllable }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    syllable: String,
    color: String,
    isPartial: Boolean,
  },
  computed: {
    colorClass() {
      return ["notes-page__icon", "notes-page__icon--" + this.color];
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

    &--red {
      background-color: red;
    }

    &--orange {
      background-color: orange;
    }

    &--green {
      background-color: green;
    }
  }

  &__syllable {
    margin-top: 15px;
    font-size: 1.5em;
    text-align: center;
    width: 100%;

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
