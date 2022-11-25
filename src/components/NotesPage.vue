<template>
  <section class="notes-page">
    <single-note note="c" syllable="Tu" :is-partial="true" />
    <single-note note="d" syllable="taj" :is-partial="false" />
    <single-note note="b" syllable="sy" :is-partial="true" />
    <single-note note="e" syllable="la" :is-partial="true" />
    <single-note note="f" syllable="by" :is-partial="false" />
    <single-note note="g" syllable="bę" :is-partial="true" />
    <single-note note="a" syllable="dą" :is-partial="false" />
    <single-note note="c" syllable="hej" :is-partial="false" />
  </section>
</template>

<script lang="ts">
import SingleNote from "@/components/SingleNote.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    SingleNote,
  },
});
</script>

<style lang="scss" scoped>
.notes-page {
  width: 800px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-content: start;
  row-gap: 15px;
  border: 1px solid rgb(201, 201, 201);
  padding: 30px;
}
</style>
