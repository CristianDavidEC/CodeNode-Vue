<template>
  <BoxNode title="Cicle">
    <template #icon>
      <BIconArrowRepeat class="title-color font-semibold text-lg" />
    </template>
    <template #content>
      <div class="flex flex-col items-center">
        <h1 class="title-color font-semibold">From</h1>
        <BIconArrowRepeat class="title-color font-bold text-2xl my-1" />
        <h1 class="title-color font-semibold">To</h1>
      </div>
    </template>
  </BoxNode>
</template>

<script setup>
import { ref } from "vue";
import { BIconArrowRepeat } from "bootstrap-icons-vue";

import BoxNode from "./BoxNode.vue";

const selectOperation = ref("");
</script>
