<template>
  <BoxNode title="Logic Operation">
    <template #icon>
      <BIconShuffle class="title-color font-bold text-lg" />
    </template>
    <template #content>
      <div class="text-center">
        <div class="flex justify-between pl-6">
          <h1 class="title-color font-semibold">Value 1</h1>
          <h1 class="title-color font-semibold">True</h1>
        </div>

        <div
          class="flex justify-between items-center px-3 my-3 mr-8 text-2xl text-blue-900"
        >
          <span
            value="Add"
            class="hover:bg-blue-400 hover:text-white rounded-lg w-7 font-bold border-2 border-blue-900"
            @click="selectLogic = 'Less'"
            :class="selectLogic == 'Less' ? 'bg-blue-900 text-white' : ''"
          >
            &lt;
          </span>

          <span
            value="Subtract"
            class="hover:bg-blue-400 hover:text-white rounded-lg w-7 font-bold border-2 border-blue-900"
            @click="selectLogic = 'Greater'"
            :class="selectLogic == 'Greater' ? 'bg-blue-900 text-white' : ''"
          >
            &gt;
          </span>

          <span
            value="Multiply"
            class="hover:bg-blue-400 hover:text-white rounded-lg w-7 font-bold border-2 border-blue-900"
            @click="selectLogic = 'Different'"
            :class="selectLogic == 'Different' ? 'bg-blue-900 text-white' : ''"
          >
            !=
          </span>

          <span
            value="Divide"
            class="hover:bg-blue-400 hover:text-white rounded-lg w-7 font-bold border-2 border-blue-900"
            @click="selectLogic = 'Equal'"
            :class="selectLogic == 'Equal' ? 'bg-blue-900 text-white' : ''"
          >
            =
          </span>
        </div>
        <div class="flex justify-between pl-6">
          <h1 class="title-color font-semibold">Value 2</h1>
          <h1 class="title-color font-semibold">False</h1>
        </div>
      </div>
    </template>
  </BoxNode>
</template>

<script setup>
import { ref } from "vue";
import { BIconShuffle } from "bootstrap-icons-vue";
import BoxNode from "./BoxNode.vue";

const selectLogic = ref("");
</script>
