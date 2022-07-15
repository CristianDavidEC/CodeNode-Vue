<template>
  <BoxNode title="Math Operation">
    <template #icon>
      <BIconCalculator class="title-color font-semibold text-lg" />
    </template>
    <template #content>
      <div class="text-center">
        <h1 class="title-color font-semibold">Value 1</h1>

        <div class="flex justify-between px-5 text-2xl my-3 text-blue-900">
          <span
            value="Add"
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="selectOperation = 'Add'"
            :class="selectOperation == 'Add' ? 'bg-blue-900 text-white' : ''"
          >
            <BIconPlusSquare />
          </span>

          <span
            value="Subtract"
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="selectOperation = 'Subtract'"
            :class="
              selectOperation == 'Subtract' ? 'bg-blue-900 text-white' : ''
            "
          >
            <BIconDashSquare />
          </span>

          <span
            value="Multiply"
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="selectOperation = 'Multiply'"
            :class="
              selectOperation == 'Multiply' ? 'bg-blue-900 text-white' : ''
            "
          >
            <BIconXSquare />
          </span>

          <span
            value="Divide"
            class="hover:bg-blue-400 hover:text-white p-1 rounded-lg"
            @click="selectOperation = 'Divide'"
            :class="selectOperation == 'Divide' ? 'bg-blue-900 text-white' : ''"
          >
            <BIconSlashSquare />
          </span>
        </div>
        <h1 class="title-color font-semibold">Value 2</h1>
      </div>
    </template>
  </BoxNode>
</template>

<script setup>
import { ref } from "vue";
import {
  BIconCalculator,
  BIconPlusSquare,
  BIconDashSquare,
  BIconXSquare,
  BIconSlashSquare,
} from "bootstrap-icons-vue";

import BoxNode from "./BoxNode.vue";

const selectOperation = ref("");
</script>

<style></style>
