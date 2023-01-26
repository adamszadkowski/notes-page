<template>
  <div>
    <base-note :note="strippedNote" :is-partial="isPartial">
      <template #content>
        <div class="notes-page__desc--arrow">
          <svg viewBox="0 0 512 512">
            <path
              v-if="note.endsWith('+')"
              d="M128.4,189.3L233.4,89c5.8-6,13.7-9,22.4-9c8.7,0,16.5,3,22.4,9l105.4,100.3c12.5,11.9,12.5,31.3,0,43.2 c-12.5,11.9-32.7,11.9-45.2,0L288,184.4v217c0,16.9-14.3,30.6-32,30.6c-17.7,0-32-13.7-32-30.6v-217l-50.4,48.2  c-12.5,11.9-32.7,11.9-45.2,0C115.9,220.6,115.9,201.3,128.4,189.3z"
            />
            <path
              v-if="note.endsWith('-')"
              d="M383.6,322.7L278.6,423c-5.8,6-13.7,9-22.4,9c-8.7,0-16.5-3-22.4-9L128.4,322.7c-12.5-11.9-12.5-31.3,0-43.2 c12.5-11.9,32.7-11.9,45.2,0l50.4,48.2v-217c0-16.9,14.3-30.6,32-30.6c17.7,0,32,13.7,32,30.6v217l50.4-48.2  c12.5-11.9,32.7-11.9,45.2,0C396.1,291.4,396.1,310.7,383.6,322.7z"
            />
          </svg>
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
    strippedNote() {
      if (this.note.endsWith("+") || this.note.endsWith("-"))
        return this.note.slice(0, -1);
      return this.note;
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

    &--arrow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 80%;
      height: 80%;

      svg path {
        fill: rgba(255, 255, 255, 0.925);
      }
    }
  }
}
</style>
