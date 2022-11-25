<template>
  <section class="notes-page">
    <single-note color="red" syllable="Tu" :is-partial="true" />
    <single-note color="orange" syllable="taj" :is-partial="false" />
    <single-note color="red" syllable="sy" :is-partial="true" />
    <single-note color="green" syllable="la" :is-partial="true" />
    <single-note color="orange" syllable="by" :is-partial="false" />
    <single-note color="red" syllable="bę" :is-partial="true" />
    <single-note color="orange" syllable="dą" :is-partial="false" />
    <single-note color="green" syllable="hej" :is-partial="false" />
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
