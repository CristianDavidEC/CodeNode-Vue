<template>
  <footer class="absolute bottom-0 border-t max-w-full w-full p-3 font-normal">
    <h1>
      <font-icon icon="fa-solid fa-code" />
      {{ programStore.nameProgram }}
    </h1>
    <h1># {{ programStore.idProgram }}</h1>
    <h1 class="inline-flex font-semibold">
      <BIconDiagram3Fill class="mr-2 text-xl" />
      {{ countNodes }} Nodes
    </h1>
  </footer>
</template>

<script setup>
import useProgramStore from "../store/program";
import { BIconDiagram3Fill } from "bootstrap-icons-vue";
import { computed } from "vue";
const programStore = useProgramStore();

const countNodes = computed(() => programStore.nodesProgram.length);
</script>
