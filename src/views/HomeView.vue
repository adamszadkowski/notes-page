<template>
  <main>
    <notes-page></notes-page>
  </main>
</template>

<script lang="ts">
import NotesPage from "@/components/NotesPage.vue"
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    NotesPage,
  },
});
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  align-items: stretch;
  height: 100vh;
}
</style>
